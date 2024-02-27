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

export function parseDateStringToDate(dateString) {
    // Split the date string into day, month, and year components
    const [day, month, year] = dateString.split('/').map(Number);

    // Create a Date object
    // Note: In JavaScript, months are zero-indexed, so we need to subtract 1 from the month
    const dateObject = new Date(year, month - 1, day);

    return dateObject;
}