@RestResource(urlMapping='/opportunity/*/applydiscount')
global class OpportunityApplyDiscountResource {
@HttpPost
    global static void applyDiscount(Decimal discountPercentage) {
        // Parse context
        RestRequest req = RestContext.request;
        String[] uriParts = req.requestURI.split('/');
        Id opportunityId = uriParts[2];
        // Call the service
        OpportunitiesService.applyDiscount(
            new Set<Id> { opportunityId }, discountPercentage);     
    }
}