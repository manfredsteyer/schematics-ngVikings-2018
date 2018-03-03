import { Tree, DirEntry } from "@angular-devkit/schematics";
import { ModuleOptions } from "../schematics-angular-utils/find-module";
import { dasherize, join, Path } from "@angular-devkit/core";

export function constructDestinationPath(options: ModuleOptions): string {
    
    return '/' + (options.sourceDir? options.sourceDir + '/' : '') + (options.path || '')
                + (options.flat ? '' : '/' + dasherize(options.name));
}

export function findFile(fileName: string, host: Tree, options: ModuleOptions): Path | null {

    const startPath = constructDestinationPath(options);
    let dir: DirEntry | null = host.getDir(startPath);

    while(dir) {
        let file = dir.subfiles.find(f => f == fileName);
        if (file) {
            return join(dir.path, file);
        }
        dir = dir.parent;
    }

    return null;

}