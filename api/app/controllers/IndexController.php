<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
        $this->view->disable();

        $query = $this->db->query('select * from agendamentos');

        $this->view->recordset = $query->fetchAll();
    }

}

