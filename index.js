

const candlesticks_combinations = document.getElementById("candlesticks_combinations");
const strategy = document.getElementById("strategy");
const Pelliron = document.getElementById("Pelliron");
const investment = document.getElementById("investment");
const indicators = document.getElementById("indicators");
const btn1 = document.querySelector("#candlesticks_combinations h3");
const btn2 = document.querySelector("#strategy h3");
const btn3 = document.querySelector('#Pelliron h3');

// Убираем лишние элементы и добавляем сворачивание карточки
btn1.addEventListener("click", () => {
    const existingImages = candlesticks_combinations.querySelectorAll("img");
    if (existingImages.length > 0) {
        // Удаляем изображения и сворачиваем карточку
        existingImages.forEach(img => img.remove());
    } else {
        // Добавляем изображения
        let content = `
            <img src="candlestick%20combinations/1.jpg">
            <img src="candlestick%20combinations/2.jpg">
            <img src="candlestick%20combinations/3.png">
        `;
        candlesticks_combinations.insertAdjacentHTML("beforeend", content);
    }
});

const images = [
    {
        preview: '/strategy/adding.jpg',
        original: '/strategy/adding.jpg',
        description: 'Adding',
    },
    {
        preview: 'strategy/boolinger.jpg',
        original: '/strategy/boolinger.jpg',
        description: 'boolinger',
    },
    {
        preview: '/strategy/fibo.jpg',
        original: '/strategy/fibo.jpg',
        description: 'fibo',
    },
    {
        preview: '/strategy/macd.jpg',
        original: '/strategy/macd.jpg',
        description: 'macd',
    },
    {
        preview: '/strategy/macd2.jpg',
        original: '/strategy/macd2.jpg',
        description: 'macd2',
    },
    {
        preview: '/strategy/macd3.jpg',
        original: '/strategy/macd3.jpg',
        description: 'macd3',
    },
    {
        preview: '/strategy/moving%20average.jpg',
        original: '/strategy/moving%20average.jpg',
        description: 'moving average',
    },
    {
        preview: '/strategy/order.jpg',
        original: '/strategy/order.jpg',
        description: 'order',
    },
    {
        preview: '/strategy/order2.jpg',
        original: '/strategy/order2.jpg',
        description: 'order2',
    },
    {
        preview: '/strategy/parabolic%20star.jpg',
        original: '/strategy/parabolic%20star.jpg',
        description: 'parabolic star',
    },
    {
        preview: '/strategy/reversal%20of%20position.jpg',
        original: '/strategy/reversal%20of%20position.jpg',
        description: 'reversal of position',
    },
    {
        preview: '/strategy/stocastick.jpg',
        original: '/strategy/stocastick.jpg',
        description: 'stockstick',
    },
];
const gallery = document.querySelector('.gallery');
btn2.addEventListener("click", () => {
    const existingImages = gallery.querySelectorAll("li");
    if (existingImages.length > 0) {
        existingImages.forEach((li) => li.remove());
    } else {
        let content = images.map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                        <img class="gallery__image" src="${preview}" data-original="${original}" alt="${description}" />
                    </li>`;
        }).join('');
        gallery.insertAdjacentHTML("beforeend", content);
    }
});

        // Добавляем обработчик для открытия модального окна
        gallery.addEventListener("click", (event) => {
            const target = event.target;
            if (target.tagName !== "IMG")
                return;
            Open_modal_window(target);
        });

// Функция для открытия модального окна
const Open_modal_window = (img) => {
    const instance = basicLightbox.create(`
        <img src="${img.dataset.original}" alt="${img.alt}">
    `, {
        closable: true,
        onShow: (instance) => {
            // Добавляем обработчик клика на изображение для закрытия
            instance.element().querySelector('img').addEventListener('click', () => {
                instance.close();
            });
        }
    });

    instance.show();
};



btn3.addEventListener('click',()=>{
const ContentExist = document.querySelector('table');
if(ContentExist) ContentExist.remove();
else{
    let content = `
<table class="styled-table">
    <tr>
        <th>Ш4</th>
        <th>Ш1</th>
    </tr>
    <tr>
        <td>AUDCAD(6)</td>
        <td>AUDJPY(8)</td>
    </tr>
    <tr>
        <td>AUDCHF(5)</td>
        <td>AUDUSD(4)</td>
    </tr>
    <tr>
        <td>AUDNZD(6)</td>
        <td>EURJPY(6)</td>
    </tr>
    <tr>
        <td>CADCHF(15)</td>
        <td>EURUSD(3)</td>
    </tr>
    <tr>
        <td>CADJPY(17)</td>
        <td>GBPCAD(8)</td>
    </tr>
    <tr>
        <td>CHFJPY(17)</td>
        <td>GBPCHF(5)</td>
    </tr>
    <tr>
        <td>EURAUD(6)</td>
        <td>GBPJPY(7)</td>
    </tr>
    <tr>
        <td>EURCAD(7)</td>
        <td>GBPNZD(10)</td>
    </tr>
    <tr>
        <td>EURCHF(5)</td>
        <td>GBPUSD(3)</td>
    </tr>
    <tr>
        <td>EURGBP(5)</td>
        <td>NZDCAD(8)</td>
    </tr>
    <tr>
        <td>EURNOK(50)</td>
        <td>NZDUSD(4)</td>
    </tr>
    <tr>
        <td>EURNZD(15)</td>
        <td>USDCAD(4)</td>
    </tr>
    <tr>
        <td>EURSEK(50)</td>
        <td>USDCHF(3)</td>
    </tr>
    <tr>
        <td>GBPAUD(15)</td>
        <td>USDJPY(5)</td>
    </tr>
    <tr>
        <td>NZDCHF(8)</td>
        <td></td>
    </tr>
    <tr>
        <td>NZDJPY(7)</td>
        <td></td>
    </tr>
</table>
    `
    Pelliron.insertAdjacentHTML("beforeend", content);
}
});