import React from 'react'

function Alert(props) {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        props.alert && <div>
            <div className={`alert alert-primary alert-dismissible fade show text-center`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>
        </div>
    )
}

export default Alert
