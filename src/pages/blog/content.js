import avatar from "../../image/avatar.jpeg";

export const content = [
    {
      id: 'avatar',
      name: 'Фото профиля',
      value: <img alt="avatar" src={avatar}/>,
    },
    {
      id: 'userName',
      name: 'Имя пользователя',
      value: 'Кот',
    },
    {
      id: 'contact',
      name: 'Контактные данные',
      value:'meow@email.com',
    }
  ]