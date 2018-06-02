document.querySelector('#generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
  e.preventDefault();

  //read values from form
  const origin = document.getElementById('country').value;
  const gender = document.getElementById('gender').value;
  const quantity = document.getElementById('quantity').value;
  const body = document.getElementsByTagName('body')[0];    

  //Build the URL
  let url = 'https://uinames.com/api/?';

  //Read the form values and update the URL

  //origin
  if(origin != '') {
    url += `region=${origin}&`;
  }

  //gender
  if(gender != '') {
    url += `gender=${gender}&`;
  }

  //amount
  if(quantity != '') {
    url += `amount=${quantity}&`;
  }

  //Fetch API
  fetch(url)
    .then(response => response.json())
    .then(names => {
          let html = '<ul class ="list">';
            names.forEach(name => {
              html += `
                <li>${name.name}</li>
              `
          })
          html += '</ul>';

          const result = document.getElementById('result');
          result.innerHTML = html;
          const element1 = document.createElement("h4");

          //change message color according to gender
          if(gender === 'male') {
            element1.innerHTML = '<h4 class="boy">Congratulations. It\'s a boy!</h4>';
            result.insertBefore(element1, result.firstChild);
          } else if (gender === 'female'){
            const element1 = document.createElement("h4");
            element1.innerHTML = '<h4 class="girl">Congratulations. It\'s a girl!</h4>';
            result.insertBefore(element1, result.firstChild);
          } else {
            const element1 = document.createElement("h4");
            element1.innerHTML = '<h4 class="neutral">Congratulations!</h4>';
            result.insertBefore(element1, result.firstChild);
          }

          //Greeting in Albanian
          if(gender === 'male' && origin == 'albania') {
            result.firstChild.remove();
            const element2 = document.createElement("h4");
            element2.innerHTML = '<h4 class="boy">Urime. Eshte djale!</h4>';
            result.insertBefore(element2, result.firstChild);
          } else if (gender === 'female' && origin === 'albania'){
            result.firstChild.remove();
            const element2 = document.createElement("h4");
            element2.innerHTML = '<h4 class="girl">Urime. Është një vajzë!</h4>';
            result.insertBefore(element2, result.firstChild);
          } else if (origin === 'albania' && gender === ''){
            result.firstChild.remove();
            const element2 = document.createElement("h4");
            element2.innerHTML = '<h4 class="neutral">Urime!</h4>';
            result.insertBefore(element2, result.firstChild);
          } 

          //Argentina
          if(gender === 'male' && origin == 'argentina') {
            result.firstChild.remove();
            const element3 = document.createElement("h4");
            element3.innerHTML = '<h4 class="boy">Felicitaciones. Es una niño!</h4>';
            console.log(element3);
            result.insertBefore(element3, result.firstChild);
          } else if (gender === 'female' && origin == 'argentina'){
            result.firstChild.remove();
            const element3 = document.createElement("h4");
            element3.innerHTML = '<h4 class="girl">Felicitaciones. Es una niña!</h4>';
            result.insertBefore(element3, result.firstChild);
          } else if (origin === 'argentina' && gender === ''){
            result.firstChild.remove();
            const element3 = document.createElement("h4");
            element3.innerHTML = '<h4 class="neutral">Felicitaciones!</h4>';
            result.insertBefore(element3, result.firstChild);
          } 

          //Costa Rica
          if(gender === 'male' && origin == 'costa rica') {
            result.firstChild.remove();
            const element4 = document.createElement("h4");
            element4.innerHTML = '<h4 class="boy">Felicitaciones. Es una niño!</h4>';
            console.log(element4);
            result.insertBefore(element4, result.firstChild);
          } else if (gender === 'female' && origin == 'costa rica'){
            result.firstChild.remove();
            const element4 = document.createElement("h4");
            element4.innerHTML = '<h4 class="girl">Felicitaciones. Es una niña!</h4>';
            result.insertBefore(element4, result.firstChild);
          } else if (origin === 'costa rica' && gender === ''){
            result.firstChild.remove();
            const element4 = document.createElement("h4");
            element4.innerHTML = '<h4 class="neutral">Felicitaciones!</h4>';
            result.insertBefore(element4, result.firstChild);
          } 

          //Colombia
          if(gender === 'male' && origin == 'colombia') {
            result.firstChild.remove();
            const element5 = document.createElement("h4");
            element5.innerHTML = '<h4 class="boy">Felicitaciones. Es una niño!</h4>';
            console.log(element4);
            result.insertBefore(element5, result.firstChild);
          } else if (gender === 'female' && origin == 'colombia'){
            result.firstChild.remove();
            const element5 = document.createElement("h4");
            element5.innerHTML = '<h4 class="girl">Felicitaciones. Es una niña!</h4>';
            result.insertBefore(element5, result.firstChild);
          } else if (origin === 'colombia' && gender === ''){
            result.firstChild.remove();
            const element5 = document.createElement("h4");
            element5.innerHTML = '<h4 class="neutral">Felicitaciones!</h4>';
            result.insertBefore(element5, result.firstChild);
          } 

          //Armenian
          if(gender === 'male' && origin == 'armenia') {
            result.firstChild.remove();
            const element6 = document.createElement("h4");
            element6.innerHTML = '<h4 class="boy">Շնորհավորանքներ: Դա մի տղա է:</h4>';
            result.insertBefore(element6, result.firstChild);
          } else if (gender === 'female' && origin == 'armenia'){
            result.firstChild.remove();
            const element6 = document.createElement("h4");
            element6.innerHTML = '<h4 class="girl">Շնորհավորանքներ: Դա մի աղջիկ է:</h4>';
            result.insertBefore(element6, result.firstChild);
          } else if (origin === 'armenia' && gender === ''){
            result.firstChild.remove();
            const element6 = document.createElement("h4");
            element6.innerHTML = '<h4 class="neutral">Շնորհավորանքներ:</h4>';
            result.insertBefore(element6, result.firstChild);
          } 

          //Austria
          if(gender === 'male' && origin == 'austria') {
            result.firstChild.remove();
            const element7 = document.createElement("h4");
            element7.innerHTML = '<h4 class="boy">Herzliche Glückwünsche. Es ist ein Junge!</h4>';
            result.insertBefore(element7, result.firstChild);
          } else if (gender === 'female' && origin == 'austria'){
            result.firstChild.remove();
            const element7 = document.createElement("h4");
            element7.innerHTML = '<h4 class="girl">Herzliche Glückwünsche. Es ist ein Mädchen!</h4>';
            result.insertBefore(element7, result.firstChild);
          } else if (origin === 'austria' && gender === ''){
            result.firstChild.remove();
            const element7 = document.createElement("h4");
            element7.innerHTML = '<h4 class="neutral">Herzliche Glückwünsche!</h4>';
            result.insertBefore(element7, result.firstChild);
          }
          
          //Germany
          if(gender === 'male' && origin == 'germany') {
            result.firstChild.remove();
            const element8 = document.createElement("h4");
            element8.innerHTML = '<h4 class="boy">Herzliche Glückwünsche. Es ist ein Junge!</h4>';
            result.insertBefore(element8, result.firstChild);
          } else if (gender === 'female' && origin == 'germany'){
            result.firstChild.remove();
            const element8 = document.createElement("h4");
            element8.innerHTML = '<h4 class="girl">Herzliche Glückwünsche. Es ist ein Mädchen!</h4>';
            result.insertBefore(element8, result.firstChild);
          } else if (origin === 'germany' && gender === ''){
            result.firstChild.remove();
            const element8 = document.createElement("h4");
            element8.innerHTML = '<h4 class="neutral">Herzliche Glückwünsche!</h4>';
            result.insertBefore(element8, result.firstChild);
          } 

          //Azerbaijan
          if(gender === 'male' && origin == 'azerbaijan') {
            result.firstChild.remove();
            const element9 = document.createElement("h4");
            element9.innerHTML = '<h4 class="boy">Təbrik edirik. Bu bir oğlan!</h4>';
            result.insertBefore(element9, result.firstChild);
          } else if (gender === 'female' && origin == 'azerbaijan'){
            result.firstChild.remove();
            const element9 = document.createElement("h4");
            element9.innerHTML = '<h4 class="girl">Təbrik edirik. Bu bir qız!</h4>';
            result.insertBefore(element9, result.firstChild);
          } else if (origin === 'azerbaijan' && gender === ''){
            result.firstChild.remove();
            const element9 = document.createElement("h4");
            element9.innerHTML = '<h4 class="neutral">Təbrik edirik!</h4>';
            result.insertBefore(element9, result.firstChild);
          }
          
          //Bangladesh
          if(gender === 'male' && origin == 'bangladesh') {
            result.firstChild.remove();
            const element10 = document.createElement("h4");
            element10.innerHTML = '<h4 class="boy">অভিনন্দন। এটা একটা ছেলে!</h4>';
            result.insertBefore(element10, result.firstChild);
          } else if (gender === 'female' && origin == 'bangladesh'){
            result.firstChild.remove();
            const element10 = document.createElement("h4");
            element10.innerHTML = '<h4 class="girl">অভিনন্দন। এটি একটি মেয়ে!</h4>';
            result.insertBefore(element10, result.firstChild);
          } else if (origin === 'bangladesh' && gender === ''){
            result.firstChild.remove();
            const element10 = document.createElement("h4");
            element10.innerHTML = '<h4 class="neutral">অভিনন্দন!</h4>';
            result.insertBefore(element10, result.firstChild);
          } 

          //Belgium
          if(gender === 'male' && origin == 'belgium') {
            result.firstChild.remove();
            const element11 = document.createElement("h4");
            element11.innerHTML = '<h4 class="boy">Hartelijk gefeliciteerd! Het is een jongen!</h4>';
            result.insertBefore(element11, result.firstChild);
          } else if (gender === 'female' && origin == 'belgium'){
            result.firstChild.remove();
            const element11= document.createElement("h4");
            element11.innerHTML = '<h4 class="girl">Hartelijk gefeliciteerd! Het is een meisje!</h4>';
            result.insertBefore(element11, result.firstChild);
          } else if (origin === 'belgium' && gender === ''){
            result.firstChild.remove();
            const element11 = document.createElement("h4");
            element11.innerHTML = '<h4 class="neutral">Hartelijk gefeliciteerd!</h4>';
            result.insertBefore(element11, result.firstChild);
          }
          
          //Bosnia
          if(gender === 'male' && origin == 'bosnia and herzegovina') {
            result.firstChild.remove();
            const element12 = document.createElement("h4");
            element12.innerHTML = '<h4 class="boy">Čestitam! To je dečak!</h4>';
            result.insertBefore(element12, result.firstChild);
          } else if (gender === 'female' && origin == 'bosnia and herzegovina'){
            result.firstChild.remove();
            const element12 = document.createElement("h4");
            element12.innerHTML = '<h4 class="girl">Čestitam! To je devojka!</h4>';
            result.insertBefore(element12, result.firstChild);
          } else if (origin === 'bosnia and herzegovina' && gender === ''){
            result.firstChild.remove();
            const element12 = document.createElement("h4");
            element12.innerHTML = '<h4 class="neutral">Čestitam!</h4>';
            result.insertBefore(element12, result.firstChild);
          }
          
          //Brazil
          if(gender === 'male' && origin == 'brazil') {
            result.firstChild.remove();
            const element13 = document.createElement("h4");
            element13.innerHTML = '<h4 class="boy">Parabéns! É um menino!</h4>';
            result.insertBefore(element13, result.firstChild);
          } else if (gender === 'female' && origin == 'brazil'){
            result.firstChild.remove();
            const element13 = document.createElement("h4");
            element13.innerHTML = '<h4 class="girl">Parabéns! É uma menina!</h4>';
            result.insertBefore(element13, result.firstChild);
          } else if (origin === 'brazil' && gender === ''){
            result.firstChild.remove();
            const element13 = document.createElement("h4");
            element13.innerHTML = '<h4 class="neutral">Parabéns!</h4>';
            result.insertBefore(element13, result.firstChild);
          }
          
          //China
          if(gender === 'male' && origin == 'china') {
            result.firstChild.remove();
            const element14 = document.createElement("h4");
            element14.innerHTML = '<h4 class="boy">恭喜！ 是個男孩！</h4>';
            result.insertBefore(element14, result.firstChild);
          } else if (gender === 'female' && origin == 'china'){
            result.firstChild.remove();
            const element14 = document.createElement("h4");
            element14.innerHTML = '<h4 class="girl">恭喜！ 這是一個女孩！</h4>';
            result.insertBefore(element14, result.firstChild);
          } else if (origin === 'china' && gender === ''){
            result.firstChild.remove();
            const element14 = document.createElement("h4");
            element14.innerHTML = '<h4 class="neutral">恭喜!</h4>';
            result.insertBefore(element14, result.firstChild);
          }
          
          //Egypt
          if(gender === 'male' && origin == 'egypt') {
            result.firstChild.remove();
            const element15 = document.createElement("h4");
            element15.innerHTML = '<h4 class="boy" id="rtl">تهانينا! إنه ولد!</h4>';
            result.insertBefore(element15, result.firstChild);
          } else if (gender === 'female' && origin == 'egypt'){
            result.firstChild.remove();
            const element15 = document.createElement("h4");
            element15.innerHTML = '<h4 class="girl" id="rtl">تهانينا! انها فتاة!</h4>';
            result.insertBefore(element15, result.firstChild);
          } else if (origin === 'egypt' && gender === ''){
            result.firstChild.remove();
            const element15 = document.createElement("h4");
            element15.innerHTML = '<h4 class="neutral" id="rtl">تهانينا!</h4>';
            result.insertBefore(element15, result.firstChild);
          }
          
          //Estonia
          if(gender === 'male' && origin == 'estonia') {
            result.firstChild.remove();
            const element16 = document.createElement("h4");
            element16.innerHTML = '<h4 class="boy">Õnnitleme! See on poiss!</h4>';
            result.insertBefore(element16, result.firstChild);
          } else if (gender === 'female' && origin == 'estonia'){
            result.firstChild.remove();
            const element16 = document.createElement("h4");
            element16.innerHTML = '<h4 class="girl">Õnnitleme! See on tüdruk!</h4>';
            result.insertBefore(element16, result.firstChild);
          } else if (origin === 'estonia' && gender === ''){
            result.firstChild.remove();
            const element16 = document.createElement("h4");
            element16.innerHTML = '<h4 class="neutral">Õnnitleme!</h4>';
            result.insertBefore(element16, result.firstChild);
          }
          
          //Finland
          if(gender === 'male' && origin == 'finland') {
            result.firstChild.remove();
            const element17 = document.createElement("h4");
            element17.innerHTML = '<h4 class="boy">Onnea! Se on poika!</h4>';
            result.insertBefore(element17, result.firstChild);
          } else if (gender === 'female' && origin == 'finland'){
            result.firstChild.remove();
            const element17 = document.createElement("h4");
            element17.innerHTML = '<h4 class="girl">Onnea! Se on tyttö!</h4>';
            result.insertBefore(element17, result.firstChild);
          } else if (origin === 'finland' && gender === ''){
            result.firstChild.remove();
            const element17 = document.createElement("h4");
            element17.innerHTML = '<h4 class="neutral">Onnea!</h4>';
            result.insertBefore(element17, result.firstChild);
          } 

          //France
          if(gender === 'male' && origin == 'france') {
            result.firstChild.remove();
            const element18 = document.createElement("h4");
            element18.innerHTML = '<h4 class="boy">Félicitations! C\'est un garçon!</h4>';
            result.insertBefore(element18, result.firstChild);
          } else if (gender === 'female' && origin == 'france'){
            result.firstChild.remove();
            const element18 = document.createElement("h4");
            element18.innerHTML = '<h4 class="girl">Félicitations! C\'est une fille!</h4>';
            result.insertBefore(element18, result.firstChild);
          } else if (origin === 'france' && gender === ''){
            result.firstChild.remove();
            const element18 = document.createElement("h4");
            element18.innerHTML = '<h4 class="neutral">Félicitations!</h4>';
            result.insertBefore(element18, result.firstChild);
          } 

          //Georgia
          if(gender === 'male' && origin == 'georgia') {
            result.firstChild.remove();
            const element19 = document.createElement("h4");
            element19.innerHTML = '<h4 class="boy">გილოცავთ! ეს ბიჭია!</h4>';
            result.insertBefore(element19, result.firstChild);
          } else if (gender === 'female' && origin == 'georgia'){
            result.firstChild.remove();
            const element19 = document.createElement("h4");
            element19.innerHTML = '<h4 class="girl">გილოცავთ! ეს გოგონაა!</h4>';
            result.insertBefore(element19, result.firstChild);
          } else if (origin === 'georgia' && gender === ''){
            result.firstChild.remove();
            const element19 = document.createElement("h4");
            element19.innerHTML = '<h4 class="neutral">გილოცავთ!</h4>';
            result.insertBefore(element19, result.firstChild);
          } 

          //Greece
          if(gender === 'male' && origin == 'greece') {
            result.firstChild.remove();
            const element20 = document.createElement("h4");
            element20.innerHTML = '<h4 class="boy">Συγχαρητήρια! Είναι αγόρι!</h4>';
            result.insertBefore(element20, result.firstChild);
          } else if (gender === 'female' && origin == 'greece'){
            result.firstChild.remove();
            const element20 = document.createElement("h4");
            element20.innerHTML = '<h4 class="girl">Συγχαρητήρια! Είναι κορίτσι!</h4>';
            result.insertBefore(element20, result.firstChild);
          } else if (origin === 'greece' && gender === ''){
            result.firstChild.remove();
            const element20 = document.createElement("h4");
            element20.innerHTML = '<h4 class="neutral">Συγχαρητήρια!</h4>';
            result.insertBefore(element20, result.firstChild);
          } 

          //Hungary
          if(gender === 'male' && origin == 'hungary') {
            result.firstChild.remove();
            const element21 = document.createElement("h4");
            element21.innerHTML = '<h4 class="boy">Gratulálok! Ez egy fiú!</h4>';
            result.insertBefore(element21, result.firstChild);
          } else if (gender === 'female' && origin == 'hungary'){
            result.firstChild.remove();
            const element21 = document.createElement("h4");
            element21.innerHTML = '<h4 class="girl">Gratulálok! Ez egy lány!</h4>';
            result.insertBefore(element21, result.firstChild);
          } else if (origin === 'hungary' && gender === ''){
            result.firstChild.remove();
            const element21 = document.createElement("h4");
            element21.innerHTML = '<h4 class="neutral">Gratulálok!</h4>';
            result.insertBefore(element21, result.firstChild);
          }

          //Iran
          if(gender === 'male' && origin == 'iran') {
            result.firstChild.remove();
            const element22 = document.createElement("h4");
            element22.innerHTML = '<h4 class="boy" id="rtl">مبارك باشد! این یک پسر است!</h4>';
            result.insertBefore(element22, result.firstChild);
          } else if (gender === 'female' && origin == 'iran'){
            result.firstChild.remove();
            const element22 = document.createElement("h4");
            element22.innerHTML = '<h4 class="girl" id="rtl">مبارك باشد! این یک دختر است!</h4>';
            result.insertBefore(element22, result.firstChild);
          } else if (origin === 'iran' && gender === ''){
            result.firstChild.remove();
            const element22 = document.createElement("h4");
            element22.innerHTML = '<h4 class="neutral" id="rtl">مبارك باشد!</h4>';
            result.insertBefore(element22, result.firstChild);
          }

          //Israel
          if(gender === 'male' && origin == 'israel') {
            result.firstChild.remove();
            const element23 = document.createElement("h4");
            element23.innerHTML = '<h4 class="boy" id="rtl">מזל טוב! זה בן!</h4>';
            result.insertBefore(element23, result.firstChild);
          } else if (gender === 'female' && origin == 'israel'){
            result.firstChild.remove();
            const element23 = document.createElement("h4");
            element23.innerHTML = '<h4 class="girl" id="rtl">מזל טוב! זאת בת!<h4>';
            result.insertBefore(element23, result.firstChild);
          } else if (origin === 'israel' && gender === ''){
            result.firstChild.remove();
            const element23 = document.createElement("h4");
            element23.innerHTML = '<h4 class="neutral" id="rtl">מזל טוב!</h4>';
            result.insertBefore(element23, result.firstChild);
          }

          //Italy
          if(gender === 'male' && origin == 'italy') {
            result.firstChild.remove();
            const element24 = document.createElement("h4");
            element24.innerHTML = '<h4 class="boy">Complimenti! È un ragazzo!</h4>';
            result.insertBefore(element24, result.firstChild);
          } else if (gender === 'female' && origin == 'italy'){
            result.firstChild.remove();
            const element24 = document.createElement("h4");
            element24.innerHTML = '<h4 class="girl">Complimenti! È una ragazza!<h4>';
            result.insertBefore(element24, result.firstChild);
          } else if (origin === 'italy' && gender === ''){
            result.firstChild.remove();
            const element24 = document.createElement("h4");
            element24.innerHTML = '<h4 class="neutral">Complimenti!</h4>';
            result.insertBefore(element24, result.firstChild);
          }

          //Japan
          if(gender === 'male' && origin == 'japan') {
            result.firstChild.remove();
            const element25 = document.createElement("h4");
            element25.innerHTML = '<h4 class="boy">おめでとう！ それは男の子だ！</h4>';
            result.insertBefore(element25, result.firstChild);
          } else if (gender === 'female' && origin == 'japan'){
            result.firstChild.remove();
            const element25 = document.createElement("h4");
            element25.innerHTML = '<h4 class="girl">おめでとう！ 女の子です！<h4>';
            result.insertBefore(element25, result.firstChild);
          } else if (origin === 'japan' && gender === ''){
            result.firstChild.remove();
            const element25 = document.createElement("h4");
            element25.innerHTML = '<h4 class="neutral">おめでとう！</h4>';
            result.insertBefore(element25, result.firstChild);
          }

          //Korea
          if(gender === 'male' && origin == 'korea') {
            result.firstChild.remove();
            const element26 = document.createElement("h4");
            element26.innerHTML = '<h4 class="boy">치하! 남자애 야!</h4>';
            result.insertBefore(element26, result.firstChild);
          } else if (gender === 'female' && origin == 'korea'){
            result.firstChild.remove();
            const element26 = document.createElement("h4");
            element26.innerHTML = '<h4 class="girl">치하! 그것은 여자 야!<h4>';
            result.insertBefore(element26, result.firstChild);
          } else if (origin === 'korea' && gender === ''){
            result.firstChild.remove();
            const element26 = document.createElement("h4");
            element26.innerHTML = '<h4 class="neutral">치하!</h4>';
            result.insertBefore(element26, result.firstChild);
          }

          //Mexico
          if(gender === 'male' && origin == 'mexico') {
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="boy">Felicitaciones. Es una niño!</h4>';
            result.insertBefore(element27, result.firstChild);
          } else if (gender === 'female' && origin == 'mexico'){
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="girl">Felicitaciones. Es una niña!</h4>';
            result.insertBefore(element27, result.firstChild);
          } else if (origin === 'mexico' && gender === ''){
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="neutral">Felicitaciones!</h4>';
            result.insertBefore(element27, result.firstChild);
          } 

          //Morocco
          if(gender === 'male' && origin == 'morocco') {
            result.firstChild.remove();
            const element28 = document.createElement("h4");
            element28.innerHTML = '<h4 class="boy" id="rtl">تهانينا! إنه ولد!</h4>';
            result.insertBefore(element28, result.firstChild);
          } else if (gender === 'female' && origin == 'morocco'){
            result.firstChild.remove();
            const element28 = document.createElement("h4");
            element28.innerHTML = '<h4 class="girl" id="rtl">تهانينا! انها فتاة!</h4>';
            result.insertBefore(element28, result.firstChild);
          } else if (origin === 'morocco' && gender === ''){
            result.firstChild.remove();
            const element28 = document.createElement("h4");
            element28.innerHTML = '<h4 class="neutral" id="rtl">تهانينا!</h4>';
            result.insertBefore(element28, result.firstChild);
          }

          //Netherlands
          if(gender === 'male' && origin == 'netherlands') {
            result.firstChild.remove();
            const element29 = document.createElement("h4");
            element29.innerHTML = '<h4 class="boy">Hartelijk gefeliciteerd! Het is een jongen!</h4>';
            result.insertBefore(element29, result.firstChild);
          } else if (gender === 'female' && origin == 'netherlands'){
            result.firstChild.remove();
            const element29 = document.createElement("h4");
            element29.innerHTML = '<h4 class="girl">Hartelijk gefeliciteerd! Het is een meisje!</h4>';
            result.insertBefore(element29, result.firstChild);
          } else if (origin === 'netherlands' && gender === ''){
            result.firstChild.remove();
            const element29 = document.createElement("h4");
            element29.innerHTML = '<h4 class="neutral">Hartelijk gefeliciteerd!</h4>';
            result.insertBefore(element29, result.firstChild);
          }

          //Nepal
          if(gender === 'male' && origin == 'nepal') {
            result.firstChild.remove();
            const element30 = document.createElement("h4");
            element30.innerHTML = '<h4 class="boy">बधाई छ! यो एक केटा हो!</h4>';
            result.insertBefore(element30, result.firstChild);
          } else if (gender === 'female' && origin == 'nepal'){
            result.firstChild.remove();
            const element30 = document.createElement("h4");
            element30.innerHTML = '<h4 class="girl">बधाई छ! यो केटी हो!</h4>';
            result.insertBefore(element30, result.firstChild);
          } else if (origin === 'nepal' && gender === ''){
            result.firstChild.remove();
            const element30 = document.createElement("h4");
            element30.innerHTML = '<h4 class="neutral">बधाई छ!</h4>';
            result.insertBefore(element30, result.firstChild);
          }

          //Nigeria
          if(gender === 'male' && origin == 'nigeria') {
            result.firstChild.remove();
            const element31 = document.createElement("h4");
            element31.innerHTML = '<h4 class="boy">Oriire! O jẹ ọmọkunrin kan!</h4>';
            result.insertBefore(element31, result.firstChild);
          } else if (gender === 'female' && origin == 'nigeria'){
            result.firstChild.remove();
            const element31 = document.createElement("h4");
            element31.innerHTML = '<h4 class="girl">Oriire! O jẹ ọmọbirin!</h4>';
            result.insertBefore(element31, result.firstChild);
          } else if (origin === 'nigeria' && gender === ''){
            result.firstChild.remove();
            const element31 = document.createElement("h4");
            element31.innerHTML = '<h4 class="neutral">Oriire!</h4>';
            result.insertBefore(element31, result.firstChild);
          }


          //Pakistan
          if(gender === 'male' && origin == 'pakistan') {
            result.firstChild.remove();
            const element32 = document.createElement("h4");
            element32.innerHTML = '<h4 class="boy"  id="rtl">مبارک ہو! یہ ایک لڑکا ہے</h4>';
            result.insertBefore(element32, result.firstChild);
          } else if (gender === 'female' && origin == 'pakistan'){
            result.firstChild.remove();
            const element32 = document.createElement("h4");
            element32.innerHTML = '<h4 class="girl"  id="rtl">مبارک ہو! یہ ایک لڑکی ہے</h4>';
            result.insertBefore(element32, result.firstChild);
          } else if (origin === 'pakistan' && gender === ''){
            result.firstChild.remove();
            const element32 = document.createElement("h4");
            element32.innerHTML = '<h4 class="neutral"  id="rtl">مبارک ہو</h4>';
            result.insertBefore(element32, result.firstChild);
          }

          //Poland
          if(gender === 'male' && origin == 'poland') {
            result.firstChild.remove();
            const element33 = document.createElement("h4");
            element33.innerHTML = '<h4 class="boy">Gratulacje! To chłopiec!</h4>';
            result.insertBefore(element33, result.firstChild);
          } else if (gender === 'female' && origin == 'poland'){
            result.firstChild.remove();
            const element33 = document.createElement("h4");
            element33.innerHTML = '<h4 class="girl">Gratulacje! To dziewczyna!</h4>';
            result.insertBefore(element33, result.firstChild);
          } else if (origin === 'poland' && gender === ''){
            result.firstChild.remove();
            const element33 = document.createElement("h4");
            element33.innerHTML = '<h4 class="neutral">Gratulacje!</h4>';
            result.insertBefore(element33, result.firstChild);
          }

          //Portugal
          if(gender === 'male' && origin == 'portugal') {
            result.firstChild.remove();
            const element34 = document.createElement("h4");
            element34.innerHTML = '<h4 class="boy">Parabéns! É um menino!</h4>';
            result.insertBefore(element34, result.firstChild);
          } else if (gender === 'female' && origin == 'portugal'){
            result.firstChild.remove();
            const element34 = document.createElement("h4");
            element34.innerHTML = '<h4 class="girl">Parabéns! É uma menina!</h4>';
            result.insertBefore(element34, result.firstChild);
          } else if (origin === 'portugal' && gender === ''){
            result.firstChild.remove();
            const element34 = document.createElement("h4");
            element34.innerHTML = '<h4 class="neutral">Parabéns!</h4>';
            result.insertBefore(element34, result.firstChild);
          }
          
          //Romania
          if(gender === 'male' && origin == 'romania') {
            result.firstChild.remove();
            const element35 = document.createElement("h4");
            element35.innerHTML = '<h4 class="boy">Felicitări! E un băiat!</h4>';
            result.insertBefore(element35, result.firstChild);
          } else if (gender === 'female' && origin == 'romania'){
            result.firstChild.remove();
            const element35 = document.createElement("h4");
            element35.innerHTML = '<h4 class="girl">Felicitări! E o fată!</h4>';
            result.insertBefore(element35, result.firstChild);
          } else if (origin === 'romania' && gender === ''){
            result.firstChild.remove();
            const element35 = document.createElement("h4");
            element35.innerHTML = '<h4 class="neutral">Felicitări!</h4>';
            result.insertBefore(element35, result.firstChild);
          }

          //Russia
          if(gender === 'male' && origin == 'russia') {
            result.firstChild.remove();
            const element36 = document.createElement("h4");
            element36.innerHTML = '<h4 class="boy">Поздравляем! Это мальчик!</h4>';
            result.insertBefore(element36, result.firstChild);
          } else if (gender === 'female' && origin == 'russia'){
            result.firstChild.remove();
            const element36 = document.createElement("h4");
            element36.innerHTML = '<h4 class="girl">Поздравляем! Это девушка!</h4>';
            result.insertBefore(element36, result.firstChild);
          } else if (origin === 'russia' && gender === ''){
            result.firstChild.remove();
            const element36 = document.createElement("h4");
            element36.innerHTML = '<h4 class="neutral">Поздравляем!</h4>';
            result.insertBefore(element36, result.firstChild);
          }

          //Saudi Arabia
          if(gender === 'male' && origin == 'saudi arabia') {
            result.firstChild.remove();
            const element37 = document.createElement("h4");
            element37.innerHTML = '<h4 class="boy" id="rtl">تهانينا! إنه ولد!</h4>';
            result.insertBefore(element37, result.firstChild);
          } else if (gender === 'female' && origin == 'saudi arabia'){
            result.firstChild.remove();
            const element37 = document.createElement("h4");
            element37.innerHTML = '<h4 class="girl" id="rtl">تهانينا! انها فتاة!</h4>';
            result.insertBefore(element37, result.firstChild);
          } else if (origin === 'saudi arabia' && gender === ''){
            result.firstChild.remove();
            const element37 = document.createElement("h4");
            element37.innerHTML = '<h4 class="neutral" id="rtl">تهانينا!</h4>';
            result.insertBefore(element37, result.firstChild);
          }

          //Slovakia
          if(gender === 'male' && origin == 'slovakia') {
            result.firstChild.remove();
            const element38 = document.createElement("h4");
            element38.innerHTML = '<h4 class="boy">Blahoželáme! Je to chlapec!</h4>';
            result.insertBefore(element38, result.firstChild);
          } else if (gender === 'female' && origin == 'slovakia'){
            result.firstChild.remove();
            const element38 = document.createElement("h4");
            element38.innerHTML = '<h4 class="girl">Blahoželáme! Je to dievča!</h4>';
            result.insertBefore(element38, result.firstChild);
          } else if (origin === 'slovakia' && gender === ''){
            result.firstChild.remove();
            const element38 = document.createElement("h4");
            element38.innerHTML = '<h4 class="neutral">Blahoželáme!</h4>';
            result.insertBefore(element38, result.firstChild);
          }

          //Slovenia
          if(gender === 'male' && origin == 'slovenia') {
            result.firstChild.remove();
            const element39 = document.createElement("h4");
            element39.innerHTML = '<h4 class="boy">Čestitam! To je fant!</h4>';
            result.insertBefore(element39, result.firstChild);
          } else if (gender === 'female' && origin == 'slovenia'){
            result.firstChild.remove();
            const element39 = document.createElement("h4");
            element39.innerHTML = '<h4 class="girl">Čestitam! To je punca!</h4>';
            result.insertBefore(element39, result.firstChild);
          } else if (origin === 'slovenia' && gender === ''){
            result.firstChild.remove();
            const element39 = document.createElement("h4");
            element39.innerHTML = '<h4 class="neutral">Čestitam!</h4>';
            result.insertBefore(element39, result.firstChild);
          }

          //Spain
          if(gender === 'male' && origin == 'spain') {
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="boy">Felicitaciones. Es una niño!</h4>';
            result.insertBefore(element27, result.firstChild);
          } else if (gender === 'female' && origin == 'spain'){
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="girl">Felicitaciones. Es una niña!</h4>';
            result.insertBefore(element27, result.firstChild);
          } else if (origin === 'spain' && gender === ''){
            result.firstChild.remove();
            const element27 = document.createElement("h4");
            element27.innerHTML = '<h4 class="neutral">Felicitaciones!</h4>';
            result.insertBefore(element27, result.firstChild);
          } 

          //Sweden
          if(gender === 'male' && origin == 'sweden') {
            result.firstChild.remove();
            const element40 = document.createElement("h4");
            element40.innerHTML = '<h4 class="boy">Grattis! Det är en pojke!</h4>';
            result.insertBefore(element40, result.firstChild);
          } else if (gender === 'female' && origin == 'sweden'){
            result.firstChild.remove();
            const element40 = document.createElement("h4");
            element40.innerHTML = '<h4 class="girl">Grattis! Det är en tjej!</h4>';
            result.insertBefore(element40, result.firstChild);
          } else if (origin === 'sweden' && gender === ''){
            result.firstChild.remove();
            const element40 = document.createElement("h4");
            element40.innerHTML = '<h4 class="neutral">Grattis!</h4>';
            result.insertBefore(element40, result.firstChild);
          } 

          //Turkey
          if(gender === 'male' && origin == 'turkey') {
            result.firstChild.remove();
            const element41 = document.createElement("h4");
            element41.innerHTML = '<h4 class="boy">Tebrikler! Bu bir çocuk!</h4>';
            result.insertBefore(element41, result.firstChild);
          } else if (gender === 'female' && origin == 'turkey'){
            result.firstChild.remove();
            const element41 = document.createElement("h4");
            element41.innerHTML = '<h4 class="girl">Tebrikler! Bu bir kız!</h4>';
            result.insertBefore(element41, result.firstChild);
          } else if (origin === 'turkey' && gender === ''){
            result.firstChild.remove();
            const element41 = document.createElement("h4");
            element41.innerHTML = '<h4 class="neutral">Tebrikler!</h4>';
            result.insertBefore(element41, result.firstChild);
          }
          
          //Ukraine
          if(gender === 'male' && origin == 'ukraine') {
            result.firstChild.remove();
            const element42 = document.createElement("h4");
            element42.innerHTML = '<h4 class="boy">Вітаю! Це хлопчик!</h4>';
            result.insertBefore(element42, result.firstChild);
          } else if (gender === 'female' && origin == 'ukraine'){
            result.firstChild.remove();
            const element42 = document.createElement("h4");
            element42.innerHTML = '<h4 class="girl">Вітаю! Це дівчина!</h4>';
            result.insertBefore(element42, result.firstChild);
          } else if (origin === 'ukraine' && gender === ''){
            result.firstChild.remove();
            const element42 = document.createElement("h4");
            element42.innerHTML = '<h4 class="neutral">Вітаю!</h4>';
            result.insertBefore(element42, result.firstChild);
          } 

          //Vietnam
          if(gender === 'male' && origin == 'vietnam') {
            result.firstChild.remove();
            const element43 = document.createElement("h4");
            element43.innerHTML = '<h4 class="boy">Xin chúc mừng! Đó là một cậu bé!</h4>';
            result.insertBefore(element43, result.firstChild);
          } else if (gender === 'female' && origin == 'vietnam'){
            result.firstChild.remove();
            const element43 = document.createElement("h4");
            element43.innerHTML = '<h4 class="girl">Xin chúc mừng! Đó là một cô gái!</h4>';
            result.insertBefore(element43, result.firstChild);
          } else if (origin === 'vietnam' && gender === ''){
            result.firstChild.remove();
            const element43 = document.createElement("h4");
            element43.innerHTML = '<h4 class="neutral">Xin chúc mừng!</h4>';
            result.insertBefore(element43, result.firstChild);
          } 
    })
    .catch(error => console.log(error));

  //change background to country flag according to selection
  if(origin) {
    body.style.background = `url("./img/${origin}.jpg") left top / cover no-repeat`;
   }
}
