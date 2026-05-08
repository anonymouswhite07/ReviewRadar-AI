from fastapi import APIRouter

router = APIRouter()

@router.get("/{product_id}")
async def get_analytics(product_id: str):
    return {"message": "Get analytics for product"}

@router.get("/summary/{product_id}")
async def get_summary(product_id: str):
    return {"message": "Get summary for product"}
