/*
 * @Author: leibaio leibaio@qq.com
 * @Date: 2022-06-16 01:18:18
 * @LastEditors: leibaio leibaio@qq.com
 * @LastEditTime: 2022-06-21 21:56:35
 * @FilePath: /leibo/mock/model/auth.ts
 * @Description: 账密鉴权设置
 */
interface UserModel extends Auth.UserInfo {
  token: string;
  refreshToken: string;
  password: string;
}

export const userModel: UserModel[] = [
  {
    token: 'LEIBO',
    refreshToken: '__REFRESH_TOKEN_LEIBO__',
    userId: '0',
    userName: 'leibo',
    userRole: 'super',
    password: 'leibo123'
  },
  {
    token: '__TOKEN_SUPER__',
    refreshToken: '__REFRESH_TOKEN_SUPER__',
    userId: '1',
    userName: 'Super',
    userRole: 'super',
    password: 'super123'
  },
  {
    token: '__TOKEN_ADMIN__',
    refreshToken: '__REFRESH_TOKEN_ADMIN__',
    userId: '2',
    userName: 'Admin',
    userRole: 'admin',
    password: 'admin123'
  },
  {
    token: '__TOKEN_USER01__',
    refreshToken: '__REFRESH_TOKEN_USER01__',
    userId: '3',
    userName: 'User01',
    userRole: 'user',
    password: 'user01123'
  }
];
