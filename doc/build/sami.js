
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Controller" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Controller.html">Controller</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Controller_Admin" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Controller/Admin.html">Admin</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Controller_Admin_HomepageController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Controller/Admin/HomepageController.html">HomepageController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Controller_HomepageController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/HomepageController.html">HomepageController</a>                    </div>                </li>                            <li data-name="class:App_Controller_MemberController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/MemberController.html">MemberController</a>                    </div>                </li>                            <li data-name="class:App_Controller_RegistrationController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/RegistrationController.html">RegistrationController</a>                    </div>                </li>                            <li data-name="class:App_Controller_SecurityController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/SecurityController.html">SecurityController</a>                    </div>                </li>                            <li data-name="class:App_Controller_TicketController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/TicketController.html">TicketController</a>                    </div>                </li>                            <li data-name="class:App_Controller_UserController" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Controller/UserController.html">UserController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Entity" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Entity.html">Entity</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Entity_Ticket" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Entity/Ticket.html">Ticket</a>                    </div>                </li>                            <li data-name="class:App_Entity_User" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Entity/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Form" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Form.html">Form</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Form_TicketType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Form/TicketType.html">TicketType</a>                    </div>                </li>                            <li data-name="class:App_Form_User1Type" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Form/User1Type.html">User1Type</a>                    </div>                </li>                            <li data-name="class:App_Form_UserType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Form/UserType.html">UserType</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Repository" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repository.html">Repository</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Repository_TicketRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repository/TicketRepository.html">TicketRepository</a>                    </div>                </li>                            <li data-name="class:App_Repository_UserRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repository/UserRepository.html">UserRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Kernel" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Controller.html", "name": "App\\Controller", "doc": "Namespace App\\Controller"},{"type": "Namespace", "link": "App/Controller/Admin.html", "name": "App\\Controller\\Admin", "doc": "Namespace App\\Controller\\Admin"},{"type": "Namespace", "link": "App/Entity.html", "name": "App\\Entity", "doc": "Namespace App\\Entity"},{"type": "Namespace", "link": "App/Form.html", "name": "App\\Form", "doc": "Namespace App\\Form"},{"type": "Namespace", "link": "App/Repository.html", "name": "App\\Repository", "doc": "Namespace App\\Repository"},
            
            {"type": "Class", "fromName": "App\\Controller\\Admin", "fromLink": "App/Controller/Admin.html", "link": "App/Controller/Admin/HomepageController.html", "name": "App\\Controller\\Admin\\HomepageController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\Admin\\HomepageController", "fromLink": "App/Controller/Admin/HomepageController.html", "link": "App/Controller/Admin/HomepageController.html#method_index", "name": "App\\Controller\\Admin\\HomepageController::index", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/HomepageController.html", "name": "App\\Controller\\HomepageController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\HomepageController", "fromLink": "App/Controller/HomepageController.html", "link": "App/Controller/HomepageController.html#method_index", "name": "App\\Controller\\HomepageController::index", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/MemberController.html", "name": "App\\Controller\\MemberController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\MemberController", "fromLink": "App/Controller/MemberController.html", "link": "App/Controller/MemberController.html#method_index", "name": "App\\Controller\\MemberController::index", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/RegistrationController.html", "name": "App\\Controller\\RegistrationController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\RegistrationController", "fromLink": "App/Controller/RegistrationController.html", "link": "App/Controller/RegistrationController.html#method_registerAction", "name": "App\\Controller\\RegistrationController::registerAction", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/SecurityController.html", "name": "App\\Controller\\SecurityController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\SecurityController", "fromLink": "App/Controller/SecurityController.html", "link": "App/Controller/SecurityController.html#method_login", "name": "App\\Controller\\SecurityController::login", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/TicketController.html", "name": "App\\Controller\\TicketController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\TicketController", "fromLink": "App/Controller/TicketController.html", "link": "App/Controller/TicketController.html#method_index", "name": "App\\Controller\\TicketController::index", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\TicketController", "fromLink": "App/Controller/TicketController.html", "link": "App/Controller/TicketController.html#method_new", "name": "App\\Controller\\TicketController::new", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\TicketController", "fromLink": "App/Controller/TicketController.html", "link": "App/Controller/TicketController.html#method_show", "name": "App\\Controller\\TicketController::show", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\TicketController", "fromLink": "App/Controller/TicketController.html", "link": "App/Controller/TicketController.html#method_edit", "name": "App\\Controller\\TicketController::edit", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\TicketController", "fromLink": "App/Controller/TicketController.html", "link": "App/Controller/TicketController.html#method_delete", "name": "App\\Controller\\TicketController::delete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Controller", "fromLink": "App/Controller.html", "link": "App/Controller/UserController.html", "name": "App\\Controller\\UserController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Controller\\UserController", "fromLink": "App/Controller/UserController.html", "link": "App/Controller/UserController.html#method_index", "name": "App\\Controller\\UserController::index", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\UserController", "fromLink": "App/Controller/UserController.html", "link": "App/Controller/UserController.html#method_new", "name": "App\\Controller\\UserController::new", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\UserController", "fromLink": "App/Controller/UserController.html", "link": "App/Controller/UserController.html#method_show", "name": "App\\Controller\\UserController::show", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\UserController", "fromLink": "App/Controller/UserController.html", "link": "App/Controller/UserController.html#method_edit", "name": "App\\Controller\\UserController::edit", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Controller\\UserController", "fromLink": "App/Controller/UserController.html", "link": "App/Controller/UserController.html#method_delete", "name": "App\\Controller\\UserController::delete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity", "fromLink": "App/Entity.html", "link": "App/Entity/Ticket.html", "name": "App\\Entity\\Ticket", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getId", "name": "App\\Entity\\Ticket::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getNumero", "name": "App\\Entity\\Ticket::getNumero", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setNumero", "name": "App\\Entity\\Ticket::setNumero", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getDateDepot", "name": "App\\Entity\\Ticket::getDateDepot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setDateDepot", "name": "App\\Entity\\Ticket::setDateDepot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getWeight", "name": "App\\Entity\\Ticket::getWeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setWeight", "name": "App\\Entity\\Ticket::setWeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getUnit", "name": "App\\Entity\\Ticket::getUnit", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setUnit", "name": "App\\Entity\\Ticket::setUnit", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getCoupeur", "name": "App\\Entity\\Ticket::getCoupeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setCoupeur", "name": "App\\Entity\\Ticket::setCoupeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getChargeur", "name": "App\\Entity\\Ticket::getChargeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setChargeur", "name": "App\\Entity\\Ticket::setChargeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_getChauffeur", "name": "App\\Entity\\Ticket::getChauffeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method_setChauffeur", "name": "App\\Entity\\Ticket::setChauffeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Ticket", "fromLink": "App/Entity/Ticket.html", "link": "App/Entity/Ticket.html#method___toString", "name": "App\\Entity\\Ticket::__toString", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity", "fromLink": "App/Entity.html", "link": "App/Entity/User.html", "name": "App\\Entity\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method___construct", "name": "App\\Entity\\User::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getUsername", "name": "App\\Entity\\User::getUsername", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getSalt", "name": "App\\Entity\\User::getSalt", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getPassword", "name": "App\\Entity\\User::getPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_setPassword", "name": "App\\Entity\\User::setPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getRoles", "name": "App\\Entity\\User::getRoles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_addRole", "name": "App\\Entity\\User::addRole", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_eraseCredentials", "name": "App\\Entity\\User::eraseCredentials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_serialize", "name": "App\\Entity\\User::serialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_unserialize", "name": "App\\Entity\\User::unserialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getId", "name": "App\\Entity\\User::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getEmail", "name": "App\\Entity\\User::getEmail", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getPlainPassword", "name": "App\\Entity\\User::getPlainPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getIsActive", "name": "App\\Entity\\User::getIsActive", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_setId", "name": "App\\Entity\\User::setId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_setEmail", "name": "App\\Entity\\User::setEmail", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_setPlainPassword", "name": "App\\Entity\\User::setPlainPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_setIsActive", "name": "App\\Entity\\User::setIsActive", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getTicketsAsCoupeur", "name": "App\\Entity\\User::getTicketsAsCoupeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_addTicketsAsCoupeur", "name": "App\\Entity\\User::addTicketsAsCoupeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_removeTicketsAsCoupeur", "name": "App\\Entity\\User::removeTicketsAsCoupeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getTicketsAsChargeur", "name": "App\\Entity\\User::getTicketsAsChargeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_addTicketsAsChargeur", "name": "App\\Entity\\User::addTicketsAsChargeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_removeTicketsAsChargeur", "name": "App\\Entity\\User::removeTicketsAsChargeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_getTicketsAsChauffeur", "name": "App\\Entity\\User::getTicketsAsChauffeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_addTicketsAsChauffeur", "name": "App\\Entity\\User::addTicketsAsChauffeur", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\User", "fromLink": "App/Entity/User.html", "link": "App/Entity/User.html#method_removeTicketsAsChauffeur", "name": "App\\Entity\\User::removeTicketsAsChauffeur", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Form", "fromLink": "App/Form.html", "link": "App/Form/TicketType.html", "name": "App\\Form\\TicketType", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Form\\TicketType", "fromLink": "App/Form/TicketType.html", "link": "App/Form/TicketType.html#method_buildForm", "name": "App\\Form\\TicketType::buildForm", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Form\\TicketType", "fromLink": "App/Form/TicketType.html", "link": "App/Form/TicketType.html#method_configureOptions", "name": "App\\Form\\TicketType::configureOptions", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Form", "fromLink": "App/Form.html", "link": "App/Form/User1Type.html", "name": "App\\Form\\User1Type", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Form\\User1Type", "fromLink": "App/Form/User1Type.html", "link": "App/Form/User1Type.html#method_buildForm", "name": "App\\Form\\User1Type::buildForm", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Form\\User1Type", "fromLink": "App/Form/User1Type.html", "link": "App/Form/User1Type.html#method_configureOptions", "name": "App\\Form\\User1Type::configureOptions", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Form", "fromLink": "App/Form.html", "link": "App/Form/UserType.html", "name": "App\\Form\\UserType", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Form\\UserType", "fromLink": "App/Form/UserType.html", "link": "App/Form/UserType.html#method_buildForm", "name": "App\\Form\\UserType::buildForm", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Kernel.html", "name": "App\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Kernel", "fromLink": "App/Kernel.html", "link": "App/Kernel.html#method_getCacheDir", "name": "App\\Kernel::getCacheDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Kernel", "fromLink": "App/Kernel.html", "link": "App/Kernel.html#method_getLogDir", "name": "App\\Kernel::getLogDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Kernel", "fromLink": "App/Kernel.html", "link": "App/Kernel.html#method_registerBundles", "name": "App\\Kernel::registerBundles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Kernel", "fromLink": "App/Kernel.html", "link": "App/Kernel.html#method_configureContainer", "name": "App\\Kernel::configureContainer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Kernel", "fromLink": "App/Kernel.html", "link": "App/Kernel.html#method_configureRoutes", "name": "App\\Kernel::configureRoutes", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Repository", "fromLink": "App/Repository.html", "link": "App/Repository/TicketRepository.html", "name": "App\\Repository\\TicketRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repository\\TicketRepository", "fromLink": "App/Repository/TicketRepository.html", "link": "App/Repository/TicketRepository.html#method___construct", "name": "App\\Repository\\TicketRepository::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Repository\\TicketRepository", "fromLink": "App/Repository/TicketRepository.html", "link": "App/Repository/TicketRepository.html#method_find", "name": "App\\Repository\\TicketRepository::find", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Repository\\TicketRepository", "fromLink": "App/Repository/TicketRepository.html", "link": "App/Repository/TicketRepository.html#method_findOneBy", "name": "App\\Repository\\TicketRepository::findOneBy", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Repository", "fromLink": "App/Repository.html", "link": "App/Repository/UserRepository.html", "name": "App\\Repository\\UserRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repository\\UserRepository", "fromLink": "App/Repository/UserRepository.html", "link": "App/Repository/UserRepository.html#method___construct", "name": "App\\Repository\\UserRepository::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Repository\\UserRepository", "fromLink": "App/Repository/UserRepository.html", "link": "App/Repository/UserRepository.html#method_find", "name": "App\\Repository\\UserRepository::find", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Repository\\UserRepository", "fromLink": "App/Repository/UserRepository.html", "link": "App/Repository/UserRepository.html#method_findOneBy", "name": "App\\Repository\\UserRepository::findOneBy", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


