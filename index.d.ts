export declare const IDKEY = "epub";
export interface IOptions {
    outputDir?: string;
    cwd?: string;
    log?: boolean;
}
export declare function epubExtract(srcFile: string, options?: IOptions): Promise<string>;
export default epubExtract;