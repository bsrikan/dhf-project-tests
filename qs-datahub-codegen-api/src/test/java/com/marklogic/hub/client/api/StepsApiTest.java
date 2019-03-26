/*
 * QuickStart DataHub API
 * This is a sample of a QuickStart DataHub Swagger doucment defining endpoints to be mocked
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.marklogic.hub.client.api;

import com.marklogic.hub.client.model.Step;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for StepsApi
 */
@Ignore
public class StepsApiTest {

    private final StepsApi api = new StepsApi();

    
    /**
     * Create a step within a Flow
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createFlowStepTest() {
        String flowId = null;
        Step body = null;
        Step response = api.createFlowStep(flowId, body);

        // TODO: test validations
    }
    
    /**
     * Delete step by Id
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteFlowStepTest() {
        String flowId = null;
        String stepId = null;
        api.deleteFlowStep(flowId, stepId);

        // TODO: test validations
    }
    
    /**
     * Get all Steps for a Flow
     *
     * ....
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getFlowStepsTest() {
        String flowId = null;
        List<Step> response = api.getFlowSteps(flowId);

        // TODO: test validations
    }
    
    /**
     * Update step by Id
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateFlowStepTest() {
        String flowId = null;
        String stepId = null;
        Step body = null;
        api.updateFlowStep(flowId, stepId, body);

        // TODO: test validations
    }
    
}
