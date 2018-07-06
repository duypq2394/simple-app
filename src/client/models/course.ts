export default class Course {

  constructor(
    public name: string,
    public url: string,
    public fee: string,
    public imgUrl: string,
    public id?: number
  ) {
    if ( id == undefined ) {
      this.id = Date.now();
    }
  }
}
