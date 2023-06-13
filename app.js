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
            name: 'Genshin impact KOREPI (no HWID)',
            description1: 'Gеnshin Impaсt 3.7',
            description2: 'Korepi "WITHOUT HWID"',
            description3: 'Updаte 31.05.2023',
            image: 'https://cdn.discordapp.com/attachments/1118088905221210134/1118090031249227787/image.png',
            downloadLink: 'program/Korepi.zip'

          },
          {
            id: 2,
            name: 'AUTO TP PACK',
            description1: 'Пак для пассивного фарма гемов',
            description2: 'Пак для активногоф фарма гемов',
            description3: 'Пак для функции "CUSTOM TP"',
            image: 'https://cdn.discordapp.com/attachments/1118088905221210134/1118088936204550187/image.png',
            downloadLink: 'program/Custom TP PACK.7z'
          },          
          {
            id: 2,
            name: 'SOON...',
            description1: 'SOON...',
            description2: 'SOON...',
            description3: 'SOON...',
            image: 'https://cdn.discordapp.com/attachments/1118088905221210134/1118090370564243496/image.png',
            downloadLink: 'SOON...'
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
