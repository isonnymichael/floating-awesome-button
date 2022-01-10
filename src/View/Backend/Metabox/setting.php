<?php
/**
 * Metabox Setting
 *
 * @package FAB
 */
?>

<!-- START: ".fab-container" -->
<div class="fab-container metabox-settings">

    <?php
        /** Setting Type */
        $optionContainer = array( 'id' => 'fab_setting_type' );
        ob_start();
            $this->Form->select( 'fab_setting_type', array(), array(
                'id' => $optionContainer['id'],
                'class' => array('input' => 'select2'),
                'value' => $fab->getType(),
            ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Type' )
        ));
    ?>


<div class="fab-type-link">

    <?php

        /** Link - Address */
        $optionContainer = array( 'id' => 'setting_link_address' );
        ob_start();
        $this->Form->text( 'fab_setting_link', array(
            'id' => $optionContainer['id'],
            'value' => $fab->getLink() ? $fab->getLink() : '',
            'required' => in_array($fab->getLink(), ['link', 'anchor_link']) ? true : false,
        ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Link Address' )
        ));

        /** Link - Open in new tab */
        $optionContainer = array( 'id' => 'setting_link_behavior' );
        ob_start();
        $this->Form->switch( 'fab_setting_link_behavior', array(
            'id' => $optionContainer['id'],
            'label' => array( 'text' => 'Open link in new tab' ),
            'value' => ( $fab->getLinkBehavior() ) ? $fab->getLinkBehavior() : '',
        ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => ' ' ),
            'class' => array('container' => 'grid grid-cols-5 gap-4 pb-4')
        ));

    ?>

</div>

	<?php if ( $this->Helper->isPremiumPlan() ) : ?>
	    <!--.grid, Hotkey-->
		<div class="grid grid-cols-5 gap-4 py-4">
			<div class="font-medium text-gray-600 pt-2">
                Hotkey
			</div>
			<div class="col-span-4">
				<select id="fab_setting_hotkey" name="fab_setting_hotkey" class="select2" data-selected="<?php echo esc_attr( $fab->getHotkey() ); ?>"></select>
                <div class="text-gray-400 mt-2">
                    <em class="field-info">
                        To see hotkey reference you can go to
                        <code><a href="https://rawgit.com/jeresig/jquery.hotkeys/master/test-static-01.html" target="_blank">jQuery Hotkeys</a></code>.
                    </em>
                </div>
			</div>
		</div>
	    <!--.grid-->
	<?php endif; ?>
</div>
<!-- END: ".fab-container" -->

<script type="text/javascript">
	jQuery(function($) {
		window.FAB_METABOX_SETTING.init();
	});
</script>
