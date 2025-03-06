import CorePage from './CorePage.js';
import SortableList from '../09-tests-for-frontend-apps/2-sortable-list/index.js'
import fetchJson from './utils/fetch-json.js';

export default class CategoryPage extends CorePage {
    constructor() {
        super();

    }

    async render() {
        const element = document.createElement('div');
        element.className = 'categories'
        element.innerHTML = this.getTemplate();        

        this.element = element;
        this.loadComponents();
        return this.element;
    }

    loadComponents() {
        const sortableLists= Array.from(this.element.querySelectorAll('.subcategory-list .sortable-list'))
        this.componentContainer = sortableLists.map(listElement => {
            const items = Array.from(listElement.querySelectorAll('.sortable-list__item'));
            
            const sortableList = new SortableList({
                items: items
            });
            
            listElement.replaceWith(sortableList.element);            
            return sortableList;
        });

    }

    getTemplate() {
        return `
            <div class="content__top-panel">
                <h1 class="page-title">Категории товаров</h1>
            </div>
            <p>Подкатегории можно перетаскивать, меняя их порядок внутри своей категории.</p>
            <div data-elem="categoriesContainer"><div class="category category_open" data-id="bytovaya-texnika">
            <header class="category__header">
            Бытовая техника
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="krasota-i-zdorove" style="">
                <strong>Красота и здоровье</strong>
                <span><b>11</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="tovary-dlya-kuxni" style="">
                <strong>Товары для кухни</strong>
                <span><b>13</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="tovary-dlya-doma" style="">
                <strong>Товары для дома</strong>
                <span><b>11</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="smartfony-planshety-i-fototexnika">
            <header class="category__header">
            Смартфоны
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="fototexnika">
                <strong>Фототехника</strong>
                <span><b>24</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="planshety-elektronnye-knigi" style="">
                <strong>Планшеты, электронные книги</strong>
                <span><b>22</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="smartfony-i-gadzhety" style="">
                <strong>Смартфоны и гаджеты</strong>
                <span><b>11</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="tv-i-razvlecheniya">
            <header class="category__header">
            ТВ и Развлечения
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="audiotexnika" style="">
                <strong>Аудиотехника</strong>
                <span><b>24</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="igry-i-xobbi" style="">
                <strong>Игры и хобби</strong>
                <span><b>20</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="televizory-i-aksessuary" style="">
                <strong>Телевизоры и аксессуары</strong>
                <span><b>21</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="komplektuyushhie-kompyutery-i-noutbuki">
            <header class="category__header">
            Компьютеры
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="kompyutery-noutbuki-i-po">
                <strong>Компьютеры, ноутбуки и ПО</strong>
                <span><b>19</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="komplektuyushhie-dlya-pk">
                <strong>Комплектующие для ПК</strong>
                <span><b>21</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="periferiya-i-aksessuary">
                <strong>Периферия и аксессуары</strong>
                <span><b>16</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="ofis-i-set">
            <header class="category__header">
            Офис и сеть
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="orgtexnika-i-ofisnoe-oborudovanie">
                <strong>Оргтехника и офисное оборудование</strong>
                <span><b>16</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="marshrutizatory-i-prochee-besprovodnoe-oborudovanie">
                <strong>Маршрутизаторы и прочее беспроводное оборудование</strong>
                <span><b>9</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="professionalnoe-setevoe-oborudovanie">
                <strong>Профессиональное сетевое оборудование</strong>
                <span><b>21</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="aksessuary">
            <header class="category__header">
            Аксессуары
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="aksessuary-dlya-mobilnyx-ustrojstv">
                <strong>Для мобильных устройств</strong>
                <span><b>0</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="aksessuary-dlya-kompyuterov-i-noutbukov">
                <strong>Для компьютеров и ноутбуков</strong>
                <span><b>0</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="aksessuary-dlya-bytovoj-texniki">
                <strong>Для бытовой техники</strong>
                <span><b>0</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="avtotovary">
            <header class="category__header">
            Автотовары
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="avtoelektronika-i-protivougonnye-sistemy">
                <strong>Автоэлектроника и противоугонные системы</strong>
                <span><b>15</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="avtozvuk">
                <strong>Автозвук</strong>
                <span><b>24</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="naruzhnye-i-vnutrisalonnye-aksessuary">
                <strong>Наружные и внутрисалонные аксессуары</strong>
                <span><b>17</b> products</span>
            </li></ul></div>
            </div>
            </div><div class="category category_open" data-id="instrumenty">
            <header class="category__header">
            Инструменты
            </header>
            <div class="category__body">
                <div class="subcategory-list"><ul class="sortable-list"><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="elektroinstrumenty-i-texnika-dlya-sada">
                <strong>Электроинструменты и техника для сада</strong>
                <span><b>22</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="stroitelstvo-izmerenie-i-uborka">
                <strong>Строительство, измерение и уборка</strong>
                <span><b>9</b> products</span>
            </li><li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="ruchnoj-instrument-i-osnastka">
                <strong>Ручной инструмент и оснастка</strong>
                <span><b>15</b> products</span>
            </li></ul></div>
            </div>
            </div></div>
        `;
    }

    destroy() {
        super.destroy();
    }
}