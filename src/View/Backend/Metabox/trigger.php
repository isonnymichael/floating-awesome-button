<?php
/**
 * Metabox Trigger
 *
 * @package FAB
 */
?>

<!-- START: ".fab-container" -->
<div class="fab-container metabox-triggers">
    <?php
        $this->setTemplate( 'backend.optiontab' );
        $this->setSections(
            array(
                'Backend.Metabox.tab-trigger.trigger' => array(
                    'name'   => 'Trigger',
                    'active' => true,
                    'target' => 'trigger-trigger',
                ),
                'Backend.Metabox.tab-trigger.cookies' => array(
                    'name'   => 'Cookies',
                    'target'   => 'trigger-cookies',
                ),
            )
        );
        $this->setData(array(
            'fab' => $fab,
            'optionTab' => 'optionTabTrigger',
        ));
        $this->setOptions( array( 'shortcode' => false ) );
        $this->build();
    ?>
</div>
<!-- END: ".fab-container" -->

<script type="text/javascript">
    jQuery(function($) {
        window.FAB_METABOX_TRIGGER.init();
    });
</script>
