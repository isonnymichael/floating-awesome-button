<?php

namespace Fab\Module;

! defined( 'WPINC ' ) or die;

/**
 * Plugin hooks in a backend
 * setComponent
 *
 * @package    Fab
 * @subpackage Fab/Controller
 */

use FAB\Plugin;
use Fab\View;

class FABModule extends \Fab\Feature\Feature {

    /** Generate Options HTML in Backend */
    public function generateOptionsHTML($options, $parentKey = array()){
        foreach($options as $key => $option):
            if(isset( $option['children'] )) {
                $args = array();
                if(isset($option['info'])) $args['info'] = $option['info'];
                $this->Form->Heading( $option['text'], $args);
                $parentKey[] = $key;
                $parentKey[] = 'children';
                $this->generateOptionsHTML( $option['children'], $parentKey );
            } else {
                /** Option */
                $optionContainer = array( 'id' => sprintf('module_option_%s', $key) );
                ob_start();
                $singleKey = $parentKey;
                $singleKey[] = $key; $singleKey[] = 'value';
                $name = sprintf('fab_%s%s', $this->getKey(), sprintf('[%s]', implode('][', $singleKey)) );
                $args = array(
                    'id' => $optionContainer['id'],
                    'value' => $option['value'],
                );
                if( isset($option['class']) ) $args['class'] = $option['class'];
                if( $option['type']==='number' ){ $this->Form->number( $name, $args ); }
                elseif( $option['type']==='switch' ){ $this->Form->switch( $name, $args ); }
                elseif( $option['type']==='select' ){ $this->Form->select( $name, $option['options'], $args ); }
                elseif( $option['type']==='text' ){ $this->Form->text( $name, $args ); }
                /** Container */
                $args = array( 'label' => array( 'id' => $optionContainer['id'], 'text' => $option['text'] ) );
                if( isset($option['info']) ) $args['info'] = $option['info'];
                $this->Form->container( 'setting', ob_get_clean(), $args);
            }
        endforeach;
    }

    /** Grab All Assigned Variables */
    public function getVars() {
        return get_object_vars( $this );
    }

}