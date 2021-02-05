<template>
    <v-container>
        <template v-if="$i18n.locale === 'en'">
            /** this page is not translated yet */
        </template>
        <div class="block">
            <div class="header">Тестовое задание SquareGPS</div>
            <div class="text">
                Необходимо с помощью
                <strong>VueJS, Vuex, VueRouter, Vuetify</strong> написать
                приложение. Хэдер приложения должен содержать меню из 2-х
                пунктов: <strong>О задании</strong> и <strong>Карта</strong>. В
                основной части приложения должно отображаться содержимое
                разделов.
            </div>
        </div>
        <div class="block">
            <div class="subheader">Раздел “О задании”</div>
            <div class="text">
                В разделе должен быть текст этого задания, сверстанный
                аналогично.
            </div>
        </div>
        <div class="block">
            <div class="subheader">Раздел “Карта”</div>
            <div class="text">
                На экране должны быть карта и список (см пример):
            </div>
            <ol class="list">
                <li v-for="(cardItem, index) in cardItems" :key="index">
                    {{ cardItem }}
                </li>
            </ol>
        </div>
        <div class="block">
            <div class="text"><strong>Дополнительно</strong></div>
            <ol class="list">
                <li
                    v-for="(additionalItem, index) in additionalList"
                    :key="index"
                    v-html="additionalItem"
                ></li>
            </ol>
        </div>
        <div class="block">
            <div class="text">
                <strong>Напоминание: </strong> тестовое задание призвано
                показать умение писать хороший модульный код, а также умение
                пользоваться указанными технологиями и не только. Этим кодом
                нужно гордиться.
            </div>
        </div>
        <div class="block">
            <div class="text">Пример:</div>
            <img src="@/assets/images/example.png" alt="example" />
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            additionalList: [
                'Продумать отображение на мобильных устройствах',
                'Предусмотреть локализацию',
                'Необходимо с помощью <strong>jest</strong> написать 1\n' +
                    'модульный тест на любой компонент',
                'Произвести имитацию сохранения данных на бекенд (асинхронно)'
            ],
            cardItems: [
                'При клике на кнопку добавления, карта должна перейти в режим\n' +
                    'добавления маркера: в месте клика должен появится маркер, а\n' +
                    'в списке - запись с координатами',
                'При клике на маркер должна подсвечиваться запись в списке',
                'При клике на запись в списке карта должна центрироваться на\n' +
                    'маркере',
                'Маркеры должны храниться локально и не пропадать после\n' +
                    'перезагрузки страницы',
                'В адресной строке должен отображаться id выбранного маркера'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    &:not(:last-child) {
        margin-bottom: 20px;

        @media (min-width: 576px) {
            margin-bottom: 40px;
        }
    }
}

.header {
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: 500;
    @media (min-width: 576px) {
        font-size: 32px;
        margin-bottom: 15px;
    }
}

.subheader {
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 500;
    @media (min-width: 576px) {
        font-size: 26px;
        margin-bottom: 10px;
    }
}

.text {
    font-size: 14px;
    @media (min-width: 576px) {
        font-size: 18px;
    }
}

img {
    max-width: 100%;
}
</style>
