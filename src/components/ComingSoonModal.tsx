import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, PartyPopper, Rocket } from "lucide-react";
import confetti from "canvas-confetti";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isLaunched, setIsLaunched] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Launch date: September 7th, 2025, 00:00:00 local time
    const launchDate = new Date("2025-09-07T00:00:00");

    // Handle modal visibility for smooth animations
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    // Confetti effect when modal opens
    useEffect(() => {
        if (isOpen) {
            // Trigger confetti effect
            const duration = 3000;
            const animationEnd = Date.now() + duration;

            const randomInRange = (min: number, max: number) => {
                return Math.random() * (max - min) + min;
            };

            const interval = setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                confetti({
                    startVelocity: 30,
                    spread: 360,
                    ticks: 200,
                    origin: {
                        x: randomInRange(0.1, 0.3),
                        y: Math.random() - 0.2
                    }
                });

                confetti({
                    startVelocity: 30,
                    spread: 360,
                    ticks: 200,
                    origin: {
                        x: randomInRange(0.7, 0.9),
                        y: Math.random() - 0.2
                    }
                });
            }, 250);
        }
    }, [isOpen]);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
                setIsLaunched(false);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsLaunched(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isOpen && !isVisible) return null;

    return (
        <div className={`modal-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop with blur effect */}
            <div
                className="modal-backdrop"
                onClick={onClose}
            />

            {/* Modal */}
            <Card className={`modal-content ${isVisible ? 'modal-enter' : ''}`}>
                <CardContent className="p-8 text-center relative overflow-hidden">

                    {/* Close button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 h-8 w-8 p-0"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>

                    {/* Main content */}
                    <div className="relative z-10">
                        {/* Party icon */}
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                {isLaunched ? (
                                    <Rocket className="h-10 w-10 text-white" />
                                ) : (
                                    <PartyPopper className="h-10 w-10 text-white" />
                                )}
                            </div>
                        </div>

                        {isLaunched ? (
                            /* Launch Live State */
                            <>
                                {/* Title */}
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    🚀 LaunchMails is Live!
                                </h2>

                                {/* Subtext */}
                                <p className="text-gray-600 mb-8 text-lg">
                                    Thanks for waiting, the future of email is here.
                                </p>

                                {/* Coming Soon Button */}
                                <Button
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        // Not functional, just for show
                                        console.log("Coming soon clicked!");
                                    }}
                                >
                                    Coming Soon
                                </Button>

                                {/* Fun message */}
                                <p className="text-sm text-gray-500 mt-4">
                                    Welcome to the future of email! 🎉
                                </p>
                            </>
                        ) : (
                            /* Coming Soon State */
                            <>
                                {/* Title */}
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    🎉 We're Almost Live!
                                </h2>

                                {/* Subtext */}
                                <p className="text-gray-600 mb-8 text-lg">
                                    LaunchMails will be available on{" "}
                                    <span className="font-semibold text-purple-600">
                                        Sunday, 7th September 2025
                                    </span>
                                    . Stay tuned!
                                </p>

                                {/* Countdown Timer */}
                                <div className="grid grid-cols-4 gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4">
                                        <div className="text-2xl font-bold">{timeLeft.days}</div>
                                        <div className="text-xs opacity-90">Days</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4">
                                        <div className="text-2xl font-bold">{timeLeft.hours}</div>
                                        <div className="text-xs opacity-90">Hours</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg p-4">
                                        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                                        <div className="text-xs opacity-90">Minutes</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4">
                                        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                                        <div className="text-xs opacity-90">Seconds</div>
                                    </div>
                                </div>

                                {/* Coming Soon Button */}
                                <Button
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        // Not functional, just for show
                                        console.log("Coming soon clicked!");
                                    }}
                                >
                                    Coming Soon
                                </Button>

                                {/* Fun message */}
                                <p className="text-sm text-gray-500 mt-4">
                                    Get ready for the most amazing email API experience! 🚀
                                </p>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ComingSoonModal;
