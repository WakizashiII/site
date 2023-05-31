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
            name: 'Genshin impact KOREPI',
            description1: 'Gеnshin Impaсt 3.7',
            description2: 'Korepi "WITHOUT HWID"',
            description3: 'Updаte 31.05.2023',
            image: 'https://cdn.discordapp.com/attachments/1090656041068396555/1113415900801007686/image.png',
            downloadLink: 'program/Korepi.7z'

          },
          {
            id: 2,
            name: 'AUTO TP PACK',
            description1: 'Пак для пассивного фарма гемов',
            description2: 'Пак для активногоф фарма гемов',
            description3: 'Пак для функции "CUSTOM TP"',
            image: 'https://cdn.discordapp.com/attachments/1090656041068396555/1113416375340367932/msedge_GzP88YPFUU.png',
            downloadLink: 'program/Custom TP PACK.7z'
          },          
          {
            id: 2,
            name: 'SOON...',
            description1: 'SOON...',
            description2: 'SOON...',
            description3: 'SOON...',
            image: 'https://cdn.discordapp.com/attachments/1090656041068396555/1113416203839479819/msedge_dD2q4akpZ1.png',
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