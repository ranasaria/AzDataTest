/// <reference types="node" />
/**
 *
 *
 * @export
 * @interface LineData
 */
export interface LineData {
    label: string;
    data: number[];
}
/**
 *
 *
 * @export
 * @param {any[]} xData - array of labels (the x - coordinates/labels of the points)
 * @param {LineData[]} lines - array of {@link LineData} objects
 * @param {string} [fileType='png'] - supported values are 'png' or 'jpeg'. 'jpg' is considered synonym of 'jpeg'
 * @param {string} file - the file name to write out for the generated chart
 * @returns {Promise<void>}
 */
export declare function writeChartToFile(xData: any[], lines: LineData[], fileType?: string, xAxisLabel?: string, file?: string, title?: string): Promise<Buffer>;