<form method="POST" id="module-form">
    <?php wp_nonce_field( 'module-config', 'module-config' ); ?>

    <?php foreach($modules as $module): ?>
        <?php if(!is_array($module->getOptions()) || empty($module->getOptions())) continue; ?>
        <div class="bg-white shadow-sm rounded-lg px-6 py-3 mb-6">
            <div class="float-right flex relative">
                <h3 class="module-toggle-button text-3xl text-primary-600 font-medium inline-block p-2 mt-2 text-center transition focus:outline-none waves-effect cursor-pointer" data-option="module-options-<?php echo esc_attr( $module->getKey() ) ?>">
                    <em class="fas fa-cog"></em>
                </h3>
            </div>
            <div class="flex items-center relative">
                <div class="text-gray-600 inline-block p-2 mr-4 text-center transition focus:outline-none waves-effect">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </div>
                <h2 class="text-gray-600 text-xl">
                    <?php echo esc_attr( $module->getName() ); ?>
                </h2>
            </div>
            <p class="my-2 text-gray-400">
                <?php echo esc_attr( $module->getDescription() ); ?>
            </p>

            <div id="module-options-<?php echo esc_attr( $module->getKey() ) ?>" class="module-options mt-4 p-2">
                <?php $module->generateOptionsHTML( $module->getOptions() ); ?>
            </div>
        </div>
    <?php endforeach; ?>

    <input type="submit" class="hidden md:block my-3 py-4 px-12 float-right bg-primary-600 text-white rounded-md cursor-pointer" value="Save">

    <button type="submit" class="md:hidden fixed right-6 bottom-6 md:right-8 md:bottom-12 w-16 h-16 bg-primary-600 rounded-full hover:bg-primary-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <svg class="w-6 h-6 inline-block" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#FFFFFF" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path>
        </svg>
    </button>

</form>