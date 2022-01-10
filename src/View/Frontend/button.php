<!--float button-->
<div class="fab-container" style="display:none;">
    <div class="
		fab-floating-button
		fab-template-<?php echo esc_attr( $options->fab_design->template->name ); ?> <?php echo ($options->fab_design->template->shape) ? esc_attr( sprintf('fab-template-shape-container-%s', $options->fab_design->template->shape) ) : ''; ?>
		fab-position-<?php echo esc_attr( $options->fab_design->layout->position ); ?>">
        <?php
            /** Scroll to Top */
            if($fab_custom_module['scrolltotop']) {
                /** Generate View */
                $sections = array('Frontend.Button.fab-scroll-to-top' => array('name' => 'FAB Scroll to Top', 'active' => true));
                $this->setSections($sections);
                $this->setData(array(
                    'options' => $options,
                    'fab_scroll_to_top' => $fab_custom_module['scrolltotop']
                ));
                $this->build();
            }

            /** Remove Custom Module from Display */
            foreach($fab_to_display as $key => $fab_item){
                if(in_array( $fab_item->getType(), ['readingbar', 'scrolltotop'] )){
                    unset($fab_to_display[$key]);
                }
            }

            /** Floating Awesome Button */
            $FACCount = count($fab_to_display);
            if($FACCount===1){
                /** Render FAB */
                $sections = array( 'Frontend.Button.fab-single' => array( 'name'   => 'FAB Single', 'active' => true ) );
                $this->setSections($sections);
                $this->setData(compact('options', 'fab_to_display'));
                $this->build();
            } elseif($FACCount>1) {
                /** Render FAB */
                $sections = array( 'Frontend.Button.fab-lists' => array( 'name'   => 'FAB Lists', 'active' => true ) );
                $this->setSections($sections);
                $this->setData(compact('options', 'fab_to_display'));
                $this->build();
            }
        ?>

    </div>
</div><!--.fab-container-->