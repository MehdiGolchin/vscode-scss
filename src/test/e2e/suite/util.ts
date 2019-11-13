import * as vscode from 'vscode';
import * as path from 'path';

/**
 * Line and Char as shown in lowerright of VS Code
 */
export function position(line: number, char: number) {
	return new vscode.Position(line - 1, char - 1);
}

export function getDocPath(p: string) {
	return path.resolve(__dirname, '../../../../fixtures/e2e', p);
}
export function getDocUri(p: string) {
	return vscode.Uri.file(getDocPath(p));
}

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export async function showFile(docUri: vscode.Uri) {
	const doc = await vscode.workspace.openTextDocument(docUri);
	return await vscode.window.showTextDocument(doc);
}
