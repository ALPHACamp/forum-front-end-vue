# forum-front-end

## TODO

- [ ] Finish router and empty components
- [ ] Login Authentication
- [ ] Notification and Alert
- [ ] 重新檢核語法是否都依據 [style guide](https://cn.vuejs.org/v2/style-guide/index.html) 的建議撰寫
- [ ] 重新檢視專案架構能否添加 [vue cookbook](https://vuejs.org/v2/cookbook/) 中提供的方法

## Create Project with vue-cli

### Install vue-cli

```sh
$ npm install -g @vue/cli
$ vue --version
$ vue create forum-frond-end
```

### Install SASS and vue-router

```
$ cd forum-frond-end
$ npm install
$ npm install -D sass-loader sass
$ vue add router
$ vue add vuex    # options
```

## Development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Deploy

```sh
# $ chmod +x ./deploy.sh    # if you have no permission
$ ./deploy.sh
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Reference

- [Adding Bootstrap to a Vue CLI Project](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
- [Vue API calls in a smart way](https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322)
