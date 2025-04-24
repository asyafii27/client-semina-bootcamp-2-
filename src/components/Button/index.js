import React from "react";
import { Button } from "react-bootstrap";
function SButton({
    children,
    action,
    variant,
    size,
    loading,
    disable,
    className
}) {
    return (
        <Button
            className={className}
            onclick={action}
            variant={variant}
            disabled={disable}
            size={size}
        >
            {loading ? 'Loading...' : children}
        </Button>
    )
}

export default SButton;