console.log('js 已引入')

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll('pre code').forEach((block) => {
//       hljs.highlightBlock(block);
//     });
//   });
//   document.addEventListener('load', (event) => {
//       console.log('load')
//     document.querySelectorAll('pre code').forEach((block) => {
//       hljs.highlightBlock(block);
//     });
//   });
hljs.initHighlightingOnLoad()

document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成')
    console.log('页面加载完成', window.onload)
    makeSomeThing()
})
window.onload = function () {
    makeSomeThing()
}

function makeSomeThing() {
    let box = document.querySelector('.cheat-sheet');
    let arr = [0]
    if (box !== null) {
        let items = box.children
        let minHeight = 0, index = 0
        for (let i = 0; i < items.length; i += 2) {
            if (i < 3) {
                items[i].style.top = `0px`
                items[i + 1].style.top = `${56}px`
                items[i].style.left = `${items[i].offsetWidth * (i / 2)}px`
                items[i + 1].style.left = `${items[i].offsetWidth * (i / 2)}px`
                arr[i] = items[i].offsetHeight + items[i + 1].offsetHeight
            } else {
                minHeight = arr[0]
                index = 0
                arr.forEach((item, key) => {
                    if (item && minHeight > item) {
                        minHeight = item
                        index = key
                    }
                })
                items[i].style.top = `${minHeight}px`
                items[i + 1].style.top = `${minHeight + 56}px`
                items[i].style.left = `${items[index].offsetLeft}px`
                items[i + 1].style.left = `${items[index].offsetLeft}px`
                arr[index] += (items[i].offsetHeight + items[i + 1].offsetHeight)
            }

        }

    }
    console.log(Math.max.apply(null, arr.filter(value => value)), arr)
    box.style.height = Math.max.apply(null, arr.filter(value => value)) + 'px'
}
