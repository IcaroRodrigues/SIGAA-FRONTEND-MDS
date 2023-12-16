import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserOptions } from '../interfaces/user-options';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  user = []

  constructor(
    public storage: Storage
  ) {
    let users: UserOptions[] = [
      {
        "matricula": "123",
        "password": "123"
      },
      {
        "matricula": "230049158",
        "password": "mds@123"
      },
      {
        "matricula": "220143590",
        "password": "mds@123"
      }
    ];

    users.map(({ matricula, password }) => {
      this.user.push({
        matricula,
        password
      })
    })
  }

  hasFavorite(sessionName: string): boolean {
    return (this.favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  login(matricula: string, password: string) {

    const user = this.user.find(user => user.matricula === matricula)

    if (!user) {
      return false
    }

    if (user.password !== password) {
      return false
    }

    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(user.matricula)
      this.setPassword(user.password)
      return window.dispatchEvent(new CustomEvent('user:login'));
    })
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then(username => username);
  }

  setUsername(matricula: string): Promise<any> {
    return this.storage.set('matricula', matricula);
  }

  getPassword(): Promise<string> {
    return this.storage.get('password').then(password => password)
  }

  setPassword(password: string): Promise<any> {
    return this.storage.set('password', password)
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
