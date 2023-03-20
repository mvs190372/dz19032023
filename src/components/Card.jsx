import React from 'react'

/*1.Задание: подключить библиотеку бутстрап.
Создайте компонент карточки для страницы с ценами, она должна принимать тип, цену, текст для кнопки и children с описанием.
Добавьте на страницу 3 таких карточки с разными ценами.
HTML:
     <div class="card mb-4 box-shadow">
       <div class="card-header">
         <h4 class="my-0 font-weight-normal">%type%</h4>
       </div>
       <div class="card-body">
         <h1 class="card-title pricing-card-title">%price% <small class="text-muted"> руб.</small></h1>
         <div class="mt-3 mb-4">%content%</div>
         <button type="button" class="btn btn-lg btn-block btn-outline-primary">%buttonText%</button>
       </div>
     </div>*/

function Card({card}) {
  return (<>  
       <p>***************************</p>
       <div className="card mb-4 box-shadow">
       <div className="card-header">
         <h4 className="my-0 font-weight-normal">{card.type}</h4>
       </div>
       <div className="card-body">
         <h1 className="card-title pricing-card-title">{card.price}<small className="text-muted"> руб.</small></h1>
         <div className="mt-3 mb-4">{card.content}</div>
         <button type="button" className="btn btn-lg btn-block btn-outline-primary">{card.buttonText}</button>
       </div>
     </div>


    </>
  )
}

export default Card