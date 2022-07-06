class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  set(key, value) {
    if (!key || !value) {
      throw new Error('key, value attributes are required.');
    }

    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }

    let result = [];

    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0]);
            }
          } else {
            result.push(this.data[i][0]);
          } 
        }
    }
    
    return result; 
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
};
