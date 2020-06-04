<template>
  <div class="d-md-flex flex-md-row justify-content-center">
    <div>
      <h1>Contact Us</h1>
      <div class="col-md-10">
        <form class="d-flex flex-column align-items-center">
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              class="rounded mb-3"
            />
            <label for="uemail"><b>Email</b></label>
            <input
              type="email"
              placeholder="Enter Email"
              name="uemail"
              required
              class="rounded mb-3"
            />

            <label for="usub"><b>Subject</b></label>
            <input
              type="text"
              placeholder="Enter Subject"
              name="usub"
              required
              class="rounded mb-3"
            />
            <label for="umsg"><b>Message</b></label>
            <textarea
              name="umsg"
              rows="5"
              placeholder="Message"
              class="rounded mb-3"
            ></textarea>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="d-md-flex flex-md-column mt-md-6 mt-5 px-md-0 px-4">
      <h3>Get in touch with us</h3>
      <h5>Please feel free to contact us with any queries</h5>
      <div class="d-flex flex-row">
        <div class="mt-n1">
          <img src="../assets/images/call.svg" />
        </div>
        <h6 class="ml-2">Phone:</h6>
        &nbsp;011-23900273, 9899202168
      </div>
      <div class="d-flex flex-row">
        <div class="">
          <img src="../assets/images/email.svg" />
        </div>
        <h6 class="ml-2 email-label">
          Email:
        </h6>
        &nbsp;aist2019@igdtuw.ac.in, arunsharma@igdtuw.ac.in
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.827285818852!2d77.23215831446711!3d28.664889689367865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd04014bc31b%3A0x776d29e1c94c7468!2sIndira%20Gandhi%20Delhi%20Technical%20University%20For%20Women!5e0!3m2!1sen!2sin!4v1591214902709!5m2!1sen!2sin"
        width="600"
        height="330"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        class="d-none d-md-block"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.827285818852!2d77.23215831446711!3d28.664889689367865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd04014bc31b%3A0x776d29e1c94c7468!2sIndira%20Gandhi%20Delhi%20Technical%20University%20For%20Women!5e0!3m2!1sen!2sin!4v1591214902709!5m2!1sen!2sin"
        width="300"
        height="200"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        class="d-md-none pr-1 mt-4 "
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Full-width inputs */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px 20px;
  /* margin: 8px 0; */
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
label {
  margin-bottom: 0;
}
.email-label {
  margin-top: 0.2rem;
}
/* Set a style for all buttons */
button {
  padding: 15px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
.btn.btn-primary {
  color: #fff;
  background-color: #7a7a7a;
  border-color: #7a7a7a;
  box-shadow: 0.15s ease-in-out !important;
  cursor: pointer;
}
.btn.btn-primary:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  color: #fff;
  background-color: #666666;
  border-color: #666666;
}
.heading {
  font-size: 2.3rem;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji !important;
}
</style>
