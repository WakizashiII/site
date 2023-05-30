new Vue({
      el: '#app',
      data: {
        language: 'ru',
        translations: {
          siteName: 'Nightcheats',
          language: 'English',
          information: 'Главная страница',
          download: 'Скачать',
        },
        programs: [
          {
            id: 1,
            name: 'Genshin impact',
            description1: 'Gеnshin Impaсt 3.5',
            description2: 'Acrepi v1.0.7',
            description3: 'Updаte 07.03.2023',
            image: 'https://media.discordapp.net/attachments/793077076906344470/1112005487769165904/0PDLOe0IYrlCpLHX88dv7m9vDR13CFrqRGmGPlXBPq8b30s3ID9UOtjk8Cjc5honJpU5iuJMVDZ-chPPlL0B3wgw16383.png',
            downloadLink: 'program/String Remover.bat'
          },
          {
            id: 2,
            name: 'Grand Theft Auto V',
            description1: 'Описание программы 2',
            description2: 'Описание программы 2',
            description3: 'Описание программы 2',
            image: 'https://media.discordapp.net/attachments/793077076906344470/1112005724424388618/P30maIcvD8djuIQ0xQF01rHXFdfrB9NW3JEr_hGj7mBJ_Wp4g7zHH0_ZtsmMnKgXUDI_whm-lcirBMmJyoMYsBsw16383.png',
            downloadLink: 'https://example.com/program2.exe'
          },
          {
            id: 3,
            name: 'AUTO TP PACK',
            description1: 'Пак для пассивного фарма гемов',
            description2: 'Пак для активногоф фарма гемов',
            description3: 'Пак для функции "CUSTOM TP"',
            image: 'https://media.discordapp.net/attachments/793077076906344470/1112005760424095744/oaqv0X2KJTGqS7rmWJdmDdZYZKhKukJCxkoz24tci3NsGWzDLRWwRCquehtquBNOelI9utPmmHoOlURO3BEGYFYw16383.png',
            downloadLink: 'https://cdn.discordapp.com/attachments/1076853104336703688/1113034541846765598/image.png'
          }
		  
          // Добавь остальные программы по аналогии
        ]
      },
      methods: {
        changeLanguage() {
          if (this.language === 'ru') {
            this.language = 'en';
            this.translations.language = 'Русский';
            this.translations.information = 'Main page';
            this.translations.download = 'Download';
          } else {
            this.language = 'ru';
            this.translations.language = 'English';
            this.translations.information = 'Главная страница';
            this.translations.download = 'Скачать';
          }
        },
        download(program) {
          console.log('Скачивание программы: ' + program.name);
          console.log('Ссылка для скачивания: ' + program.downloadLink);
          window.open(program.downloadLink, '_blank');
        }
      }
    });