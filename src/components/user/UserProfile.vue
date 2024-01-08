<template>
  <el-form :model="userForm" ref="ruleFormRef" :rules="rules" class="form">
    <el-form-item label="Name" prop="name">
      <el-input v-model="userForm.name" />
    </el-form-item>
    <el-form-item label="Gender" prop="gender">
      <el-radio-group v-model="userForm.gender">
        <el-radio label="male" />
        <el-radio label="female" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input-number v-model="userForm.age" :min="1" :max="200" />
    </el-form-item>
    <el-form-item label="Country" prop="country">
      <el-select v-model="userForm.country">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Save</el-button>
      <el-button @click="resetForm">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUser } from '@/stores/user';
import type { FormInstance, FormRules } from 'element-plus';

const options = [
  { value: 'China', label: '中国' },
  { value: 'Singapore', label: '新加坡' }
];

const { user } = useUser();

interface UserForm {
  name: string;
  gender: string;
  age?: boolean;
  country: string;
}

const ruleFormRef = ref<FormInstance>();

const userForm = reactive<UserForm>({
  name: user!.name,
  gender: '',
  country: ''
});

const rules = reactive<FormRules<UserForm>>({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' }
  ],
  gender: [
    {
      required: true,
      message: 'Please select a gender',
      trigger: 'change'
    }
  ],
  age: [{ required: true, message: 'age is required' }],
  country: [
    {
      required: true,
      message: 'Please select Country',
      trigger: 'change'
    }
  ]
});

const submitForm = () => {
  ruleFormRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', userForm);
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = () => {
  ruleFormRef.value?.resetFields();
};
</script>

<style scoped>
.form {
  width: 500px;
  align-self: center;
}
</style>
