/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start] - The starting number for the sequence. Default is 0.
 * @param {number} [step] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start?: number, step?: number): (() => number) => {
    var current = start;
    if(Number.isNaN(start) && Number.isNaN(step)) {
        current = 0;
        step = 1;
    } else if (Number.isNaN(start)) {
        current = 0;
        step = step;
    } else if (Number.isNaN(step)){
        current = start;
        step = 1;
    }
    return () => {
        const value = current;
        current += step;
        return value;
    };
};

