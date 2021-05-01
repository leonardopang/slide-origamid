export default class Slide{
  constructor(slide, wrapper){
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }

  onStart(event){
    event.preventDefault()
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  addSlideEvents(){
    this.wrapper.addEventListener('mousedown', this.onStart)
  }

  onMove(){

  }

  onEnd(){
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onStart.bind(this)
    this.onEnd = this.onStart.bind(this)
  }

  init(){
    this.bindEvents()
    this.addSlideEvents()
    return this
  }
}