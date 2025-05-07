using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T,TDto> :AbstractValidator<T> where TDto :BaseActivityDto
{
    public BaseActivityValidator(Func<T,TDto> selector)
    {
        RuleFor(x=>selector(x).Title).NotEmpty().WithMessage("Title is required")
        .MaximumLength(100).WithMessage("Title must not execed 100 character");

        RuleFor(x=>selector(x).Description).NotEmpty().WithMessage("Description is required");
        

        RuleFor(x=>selector(x).Date).NotEmpty()
        .GreaterThan(DateTime.UtcNow).WithMessage("date Must be in the future");

        RuleFor(x=>selector(x).Category).NotEmpty().WithMessage("Category is required");
        RuleFor(x=>selector(x).City).NotEmpty().WithMessage("City is required");
        RuleFor(x=>selector(x).Venue).NotEmpty().WithMessage("venue is required");

        RuleFor(x=>selector(x).Latitude)
        .NotEmpty().WithMessage("latitude is required")
        .InclusiveBetween(-90,90).WithMessage("latitude must be between -90 to 90");

         RuleFor(x=>selector(x).Longitude)
        .InclusiveBetween(-180,180).WithMessage("longitude must be between -180 to 180");
    }
}
