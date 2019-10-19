//@ts-nocheck
import Vue from 'vue';

// ------ IMPORT COMPONENTS
// Modals
import Modal from './modals/Modal.vue';
import UserModal from './modals/UserModal.vue';
// Components
import ClickEdit from './components/ClickEdit.vue';
import LoggedInUser from './components/LoggedInUser.vue';
import UserIcon from './components/UserIcon.vue';

// ------ REGISTER COMPONENTS
// Modals
Vue.component('modal', Modal);
Vue.component('user-modal', UserModal);
// Components
Vue.component('click-edit', ClickEdit);
Vue.component('logged-in-user', LoggedInUser);
Vue.component('user-icon', UserIcon);


