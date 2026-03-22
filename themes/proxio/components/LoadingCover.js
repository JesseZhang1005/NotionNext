import { siteConfig } from '@/lib/config';
import { useEffect, useState } from 'react';

const LoadingCover = ({ onFinishLoading }) => {
    const [isVisible, setIsVisible] = useState(true);
    const welcomeText = siteConfig('PROXIO_WELCOME_TEXT', 'Entering Jesse Space...');

    // 定义颜色变量
    const colors = {
        backgroundStart: '#1a1a1a', // 深灰色
        backgroundMiddle: '#4d4d4d', // 中灰色
        backgroundEnd: '#e6e6e6', // 浅灰色
        textColor: '#ffffff', // 白色
        rippleColor: 'rgba(255, 255, 255, 0.6)', // 半透明白色
    };

 useEffect(() => {
        // ================= 新增逻辑 1：页面刚加载时检查记忆 =================
        if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenWelcome') === 'true') {
            setIsVisible(false); // 隐藏遮罩层
            if (onFinishLoading) {
                onFinishLoading(); // 告诉网站加载完成，直接展示主页
            }
            return; // 结束执行，不再绑定下面的点击事件
        }
        // ================================================================

        const pageContainer = document.getElementById('pageContainer');
        let autoCloseTimer; // 定义倒计时炸弹

        // 提取通用“关门”指令：不管是点击还是时间到了，都走这套平滑退场逻辑
        const executeClose = () => {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('hasSeenWelcome', 'true');
            }
            // 添加页面缩放 + 模糊动画
            pageContainer?.classList?.add('page-clicked');

            // 模拟加载完成，调用回调函数
            setTimeout(() => {
                setIsVisible(false); // 淡出动画
                setTimeout(() => {
                    if (onFinishLoading) {
                        onFinishLoading();
                    }
                }, 600); // 等待淡出动画完成
            }, 1200);
        };

        const handleClick = (e) => {
            clearTimeout(autoCloseTimer); // 如果用户手动点击了，立刻拆除倒计时炸弹

            // 创建扩散光圈（保留了你点击时的水波纹特效）
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            ripple.style.left = `${e.clientX - 10}px`;
            ripple.style.top = `${e.clientY - 10}px`;
            document.body.appendChild(ripple);

            executeClose(); // 执行关门指令

            // 清理 ripple 元素
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        };

        // 监听点击事件
        document.body.addEventListener('click', handleClick);

        // ================= 新增逻辑 3：3秒自动放行 =================
        autoCloseTimer = setTimeout(() => {
            executeClose(); // 3秒一到，自动执行关门指令
            document.body.removeEventListener('click', handleClick); // 关门后撤销点击监听
        }, 5000); // ⏳ 这里的 5000 代表 5 秒，你想改快点就改成 2000，慢点就 5000
        // ==========================================================

        // 组件卸载时的清理工作
        return () => {
            document.body.removeEventListener('click', handleClick);
            clearTimeout(autoCloseTimer); // 拔掉定时器电源，防止内存泄漏
        };
    }, [onFinishLoading]);
    
    if (!isVisible) return null;

    return (
        <div className="welcome" id="pageContainer">
            <div className="welcome-text px-2" id="welcomeText">
                {welcomeText}
            </div>
            <style jsx>
                {`
                    body {
                        margin: 0;
                        background-color: ${colors.backgroundStart};
                        height: 100vh;
                        overflow: hidden;
                        cursor: pointer;
                    }

                    .welcome {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        width: 100vw;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 9999;
                        pointer-events: auto;
                        background: linear-gradient(120deg, ${colors.backgroundStart}, ${colors.backgroundMiddle}, ${colors.backgroundEnd});
                        background-size: 300% 300%;
                        animation: gradientShift 6s ease infinite;
                        transition: opacity 0.6s ease; /* 淡出动画 */
                    }

                    .welcome.page-clicked {
                        opacity: 0;
                        pointer-events: none;
                    }

                    .welcome-text {
                        font-size: 2.5rem;
                        font-weight: bold;
                        color: ${colors.textColor};
                        text-shadow: 0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6);
                        user-select: none;
                        animation: textPulse 3s ease-in-out infinite, fadeInUp 1.5s ease-out forwards;
                        text-align: center;
                        z-index: 10000; /* 确保文字层级高于背景 */
                        position: relative;
                    }

                    .ripple {
                        position: absolute;
                        border-radius: 50%;
                        background: radial-gradient(${colors.rippleColor} 0%, transparent 70%);
                        pointer-events: none;
                        width: 20px;
                        height: 20px;
                        transform: scale(0);
                        opacity: 0.8;
                        z-index: 10;
                        animation: rippleExpand 1s ease-out forwards;
                    }

                    /* 动态背景动画 */
                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    /* 文字呼吸动画 */
                    @keyframes textPulse {
                        0%, 100% {
                            transform: scale(1);
                            text-shadow: 0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6);
                        }
                        50% {
                            transform: scale(1.1);
                            text-shadow: 0 0 25px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8);
                        }
                    }

                    /* 文字淡入动画 */
                    @keyframes fadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    /* 扩散光圈动画 */
                    @keyframes rippleExpand {
                        to {
                            transform: scale(40);
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingCover;
