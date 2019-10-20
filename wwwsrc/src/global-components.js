//@ts-nocheck
import Vue from 'vue';

// ------ IMPORT COMPONENTS
// Modals
import Modal from './modals/Modal.vue';
import NewKeepModal from './modals/NewKeepModal.vue';
import UserModal from './modals/UserModal.vue';
// Components
import ClickEdit from './components/ClickEdit.vue';
import Keep from './components/Keep.vue';
import KeepInfo from './components/KeepInfo.vue';
import KeepOptions from './components/KeepOptions.vue';
import Keeps from './components/Keeps.vue';
import LoggedInUser from './components/LoggedInUser.vue';
import NavBar from './components/NavBar.vue';
import SaveKeep from './components/SaveKeep.vue';
import UserIcon from './components/UserIcon.vue';

// ------ REGISTER COMPONENTS
// Modals
Vue.component('modal', Modal);
Vue.component('new-keep-modal', NewKeepModal);
Vue.component('user-modal', UserModal);
// Components
Vue.component('click-edit', ClickEdit);
Vue.component('keep', Keep);
Vue.component('keep-info', KeepInfo);
Vue.component('keep-options', KeepOptions);
Vue.component('keeps', Keeps);
Vue.component('logged-in-user', LoggedInUser);
Vue.component('nav-bar', NavBar);
Vue.component('save-keep', SaveKeep);
Vue.component('user-icon', UserIcon);

