<?php

    /** Animation - Enable Option */
    $optionContainer = array( 'id' => 'option_animation_enable' );
    ob_start();
        $this->Form->switch( 'fab_animation[enable]', array(
            'id' => $optionContainer['id'],
            'label' => array( 'text' => 'Enable/Disable' ),
            'value' => $options->fab_animation->enable,
        ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Enable Option' )
    ));

    /** Plugin Animation Production Configuration */
    if ( ! $this->Plugin->getConfig()->production ) :

            /** Animation - Logo */
            $optionContainer = array( 'id' => 'option_animation_logo' );
            ob_start();
                $this->Form->select( 'fab_animation[elements][logo]', array(), array(
                    'id' => $optionContainer['id'],
                    'class' => array('input' => 'select2 field_option_animation_element'),
                    'value' => $options->fab_animation->elements->logo,
                ));
            $this->Form->container( 'setting', ob_get_clean(), array(
                'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Logo Animation' )
            ));

            /** Animation - Section Tab */
            $optionContainer = array( 'id' => 'option_animation_tab' );
            ob_start();
                $this->Form->select( 'fab_animation[elements][tab]', array(), array(
                    'id' => $optionContainer['id'],
                    'class' => array('input' => 'select2 field_option_animation_element'),
                    'value' => $options->fab_animation->elements->tab,
                ));
            $this->Form->container( 'setting', ob_get_clean(), array(
                'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Section Tab' )
            ));

            /** Animation - Section Content */
            $optionContainer = array( 'id' => 'option_animation_content' );
            ob_start();
                $this->Form->select( 'fab_animation[elements][content]', array(), array(
                    'id' => $optionContainer['id'],
                    'class' => array('input' => 'select2 field_option_animation_element'),
                    'value' => $options->fab_animation->elements->content,
                ));
            $this->Form->container( 'setting', ob_get_clean(), array(
                'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Section Content' )
            ));

    endif;


    /** Plugin Animation Premium Configuration */
    if ( $this->Helper->isPremiumPlan() ) :

        $this->Form->Heading('Floating Button');

        /** Animation - FAB */
        $optionContainer = array( 'id' => 'option_animation_fab' );
        ob_start();
        $this->Form->select( 'fab_animation[elements][fab]', array(), array(
            'id' => $optionContainer['id'],
            'class' => array('input' => 'select2 field_option_animation_element'),
            'value' => isset( $options->fab_animation->elements->fab ) ? $options->fab_animation->elements->fab : 'ripple',
        ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Parent' )
        ));

        /** Animation - Button List */
        $optionContainer = array( 'id' => 'option_animation_active' );
        ob_start();
        $this->Form->select( 'fab_animation[elements][fab_active]', array(), array(
            'id' => $optionContainer['id'],
            'class' => array('input' => 'select2 field_option_animation_element'),
            'value' => $options->fab_animation->elements->fab_active,
        ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => 'List Active' )
        ));

        /** Animation - Button List */
        $optionContainer = array( 'id' => 'option_animation_inactive' );
        ob_start();
        $this->Form->select( 'fab_animation[elements][fab_inactive]', array(), array(
            'id' => $optionContainer['id'],
            'class' => array('input' => 'select2 field_option_animation_element'),
            'value' => $options->fab_animation->elements->fab_inactive,
        ));
        $this->Form->container( 'setting', ob_get_clean(), array(
            'label' => array( 'id' => $optionContainer['id'] , 'text' => 'List Inactive' )
        ));

    endif;

?>