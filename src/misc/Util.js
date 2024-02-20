// Function to get viewport dimensions

export function GetViewportSize() {
    // Check if the browser supports window.innerWidth
    if (window.innerWidth !== undefined) {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
    } 
    else {
        // For browsers that do not support window.innerWidth (e.g., IE8)
        // Use document.documentElement.clientWidth and clientHeight
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
}