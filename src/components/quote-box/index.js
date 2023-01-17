import React from 'react'
import './quote-box.css'

class QuoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.chooseSentence = this.chooseSentence.bind(this)
    this.state = {
      frases: [
        {
          frase: 'Você não vale nada, mas eu gosto de você, tudo que eu queria era saber porquê',
          autor: 'Calcinha Preta'
        },
        {
          frase: 'Agora chora, e prove um pouco do sabor da solidão, o meu amor já escapou das suas mãos',
          autor: 'Aviões do Forró'
        },
        {
          frase: 'Eu achei um cobertor, que me deu tanto amor, e que nunca deixa o frio tomar conta de mim',
          autor: 'Calcinha Preta'
        },
        {
          frase: 'Diz que vai diz que vem diz querer me querer bem, é namoro ou amizade diz pra mim neném',
          autor: 'Magníficos'
        },
        {
          frase: 'Se era pra ser assim, então porque cuidou tão bem de mim, me seduziu, me enfeitiçou',
          autor: 'Aviões do Forró'
        },
        {
          frase: 'Você fugiu de mim, como se eu fosse nada, acabou com a minha vida, o silêncio é minha palavra',
          autor: 'Forrozão Tropykalia'
        }
      ],
      frase: 'random',
      autor: 'random'
    }
  }

  componentDidMount() {
    this.chooseSentence()
  }

  // componentDidUpdate(prevProps){
  //   if (this.state.frase === prevProps.frase){
  //     window.location.reload(false)
  //   }
  // }

  chooseSentence() {
    let index = Math.floor(Math.random() * (this.state.frases.length - 0) + 0)
    this.setState({
      frase: this.state.frases[index].frase,
      autor: this.state.frases[index].autor
    })
  }

  handleClick(e) {
    e.preventDefault()
  }
  
  render() {
    return (
      <div className='QuoteBox' id='quote-box'>
        <div className='quote-text quote' id='text'>
          <p>" {this.state.frase} "</p>
        </div>
        <div className='quote-author quote' id='author'>
          <p>- {this.state.autor}</p>
        </div>
        <div className='quote-button quote'>
          <button className='tweet' ><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" style={{textDecoration: 'none', color: 'white'}}>Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></button>
          <button className='new-quote' onClick={this.chooseSentence}>New Quote</button>
        </div>
      </div>
    )
  }
  
}

export default QuoteBox