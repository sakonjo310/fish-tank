class Kirby extends Fish {
    constructor(options) {
        super(options);
        this.imageUri = '/images/0jfKf6P.gif';
    }

    onClick(event) {
        this.makeNewVelocity(50);
      }
}