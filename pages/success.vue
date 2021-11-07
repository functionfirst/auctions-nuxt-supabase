<template>
  <div class="text-center">
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Check your email
    </h1>

    <p class="max-w-lg mx-auto my-6 text-gray-700">
      We have sent you an email containing an account confirmation link.
      Please check your email and use this link to activate your account.
    </p>

    <p class="max-w-xs mx-auto text-sm text-gray-500">
      Didn't receive the email? Check your spam filter or
      <nuxt-link to="/forgot-password" class="text-indigo-600 hover:text-indigo-800">
        try another email address
      </nuxt-link>.
    </p>
  </div>
</template>
