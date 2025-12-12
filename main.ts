import {CoreEditor} from '@kerebron/editor';
import {AdvancedEditorKit} from '@kerebron/editor-kits/AdvancedEditorKit';

import '@kerebron/editor/assets/index.css';
import '@kerebron/editor-kits/assets/AdvancedEditorKit.css';

window.addEventListener('load', async () => {
    const editor = new CoreEditor({
        uri: 'test.odt',
        element: document.getElementById('editor') || undefined,
        extensions: [
            new AdvancedEditorKit(),
        ],
    });

    document.getElementById('loadOdt')?.addEventListener('click', async () => {
        const input: HTMLInputElement = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            console.log('Selected file:', file);
            await editor.loadDocument(file.type, await file.bytes());
        });
        input.click();
        return true;
    });
});
