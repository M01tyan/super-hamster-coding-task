import './Button.css';

interface ButtonProps {
    label: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
    href?: string;
    target?: string;
    colorStyle?: 'black' | 'border' | 'white';
}

const Button: React.FC<ButtonProps> = ({
    label,
    iconLeft,
    iconRight,
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    href,
    target,
    colorStyle = 'black',
}) => {
    const content = (
        <>
            {loading && <span className="spinner"></span>}
            {iconLeft && !loading && <span className="icon-left">{iconLeft}</span>}
            <span className="label">{label}</span>
            {iconRight && !loading && <span className="icon-right">{iconRight}</span>}
        </>
    );
    const className = `button button-${colorStyle} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;

    if (href) {
        return (
            <a
                className={className}
                href={href}
                target={target}
                onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            className={className}
            onClick={disabled || loading ? undefined : onClick}
            type={type}
            disabled={disabled}
        >
            {content}
        </button>
    );
};
export default Button;