import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const location = useLocation();

    // Helper function to check if a route is active
    const isActiveRoute = (path: string) => {
        return location.pathname === path;
    };

    // Helper function to get nav link classes
    const getNavLinkClasses = (path: string) => {
        const baseClasses = "transition-colors duration-200";
        const activeClasses = "text-blue-600 font-semibold underline underline-offset-4";
        const inactiveClasses = "text-muted-foreground hover:text-foreground";

        return `${baseClasses} ${isActiveRoute(path) ? activeClasses : inactiveClasses}`;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-foreground">LaunchMails</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={getNavLinkClasses("/")}
                        >
                            Home
                        </Link>
                        <Link
                            to="/coming-soon"
                            className={getNavLinkClasses("/coming-soon")}
                        >
                            Coming Soon
                        </Link>
                        <Link
                            to="/api-docs"
                            className={getNavLinkClasses("/api-docs")}
                        >
                            API Docs
                        </Link>
                    </nav>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            size="sm"
                            onClick={() => setIsComingSoonOpen(true)}
                        >
                            Sign In
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className={getNavLinkClasses("/")}
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/coming-soon"
                                className={getNavLinkClasses("/coming-soon")}
                                onClick={toggleMenu}
                            >
                                Coming Soon
                            </Link>
                            <Link
                                to="/api-docs"
                                className={getNavLinkClasses("/api-docs")}
                                onClick={toggleMenu}
                            >
                                API Docs
                            </Link>
                            <div className="flex flex-col space-y-2 pt-4">
                                <Button
                                    size="sm"
                                    className="w-full"
                                    onClick={() => {
                                        setIsComingSoonOpen(true);
                                        toggleMenu();
                                    }}
                                >
                                    Sign In
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>

            {/* Coming Soon Modal */}
            <ComingSoonModal
                isOpen={isComingSoonOpen}
                onClose={() => setIsComingSoonOpen(false)}
            />
        </header>
    );
};

export default Header;
