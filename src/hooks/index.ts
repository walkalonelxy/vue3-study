import { onMounted } from "vue"

type Options = {
    el: string
}
/**
 * @description: 图片转base64
 * @param {Options} options
 * @return {*}
 */
export const useBase64 = (options: Options): Promise<{ base64: string }> => {
    return new Promise((resolve) => {
        onMounted(() => {
            let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
            img.onload = () => {
                resolve({
                    base64: base64(img)
                })
            };
            const base64 = (el: HTMLImageElement) => {
                let canvas = document.createElement('canvas');
                canvas.width = el.width;
                canvas.height = el.height;
                let ctx = canvas.getContext('2d');
                ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);
                return canvas.toDataURL('image/png');
            };
        })
    })
}