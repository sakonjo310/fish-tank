class BiteFish extends Fish {
    constructor(options) {
        super(options);
        this.imageUri = '/images/fzYjRZ9.gif';
    }

    onClick(event) {
        this.makeNewVelocity(50);
      }
}