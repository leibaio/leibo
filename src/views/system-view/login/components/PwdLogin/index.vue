<!--
 * @Author: leibaio leibaio@qq.com
 * @Date: 2022-06-16 01:18:18
 * @LastEditors: leibaio leibaio@qq.com
 * @LastEditTime: 2022-06-23 07:16:00
 * @FilePath: /leibo/src/views/system-view/login/components/PwdLogin/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="userName">
      <n-input v-model:value="model.userName" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="model.password" type="password" show-password-on="click" placeholder="请输入密码" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">忘记密码？</n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >
        确定
      </n-button>
      <div class="flex-y-center justify-between">
        <n-button class="flex-1" :block="true" @click="toLoginModule('code-login')">
          {{ EnumLoginModule['code-login'] }}
        </n-button>
        <div class="w-12px"></div>
        <n-button class="flex-1" :block="true" @click="toLoginModule('register')">
          {{ EnumLoginModule.register }}
        </n-button>
      </div>
    </n-space>
    <other-account @login="handleLoginOtherAccount" />
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { EnumLoginModule } from '@/enum';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { formRules } from '@/utils';
import { OtherAccount } from './components';

const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  userName: 'leibo',
  password: 'leibo123'
});
const rules: FormRules = {
  password: formRules.pwd
};
const rememberMe = ref(false);

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();

  formRef.value.validate(errors => {
    if (!errors) {
      const { userName, password } = model;
      login(userName, password);
    }
  });
}

function handleLoginOtherAccount(param: { userName: string; password: string }) {
  const { userName, password } = param;
  login(userName, password);
}
</script>

<style scoped></style>
