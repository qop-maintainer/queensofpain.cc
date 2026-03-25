# Security Policy and Procedures

Our security policies and procedures as a whole are outlined below. Broadly,
we wish to avoid leaving the ecosystem worse than we found it.

## Reporting a Bug or Vulnerability

We take all security bugs in our projects seriously. Thank you for improving the
security of them. We appreciate your efforts and responsible disclosure, and will
make every effort to acknowledge your contributions. We do not run any kind of
a formal bug bounty programme.

Report security bugs by emailing us at [security].

Security bugs in third-party modules should be reported to the person or team
maintaining the respective module.

## Disclosure Policy

We are advocates of [responsible vulnerability disclosure][disclosure]. If you’ve
found a vulnerability, we would like to know so we can fix it.

Disclosures should be sent to [security], including:

- Your name and affiliation
- Sufficient details of the vulnerability to allow it to be understood and
  reproduced; this would include the website, page or repository where the
  vulnerability can be observed
- Optionally, the type of vulnerability and any related [OWASP category][category]
- Relevant screenshots or any other supporting evidence. Redact any personal data before reporting
- Proof of concept code (if available), or non-destructive exploitation details
- The impact of the vulnerability
- Any references or further reading that may be appropriate

Our investigation process is straightforward. We will work to:

- Confirm the problem and determine the affected versions.
- Audit code to find any potential similar problems.
- Prepare fixes for all releases still under maintenance

## Security Checklist and Recommendations

We have baked some baseline security checks into our toolchains.

### Our Security Checklist

We use the keywords "MUST", "MUST NOT", and "SHOULD" in this document
as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

- [ ] You MUST encode, escape and validate any inputs
- [ ] You MUST NOT commit secrets, passwords or keys
- [ ] You SHOULD pin any new dependencies

### Recommendations

Prospective contributors are encouraged to familiarise themselves, if not already,
with existing techniques and good practice.

## Providing Feedback

If you have suggestions on how this process could be improved, please submit a
pull request.

## Versions

All notable changes to this policy should be noted below. We use
[SemVer](https://semver.org) for versioning, with the following intents:

- We will increment the MAJOR version when we change contact information,
  encryption keys, or a field in security.txt in a backwards-incompatible manner
- We will increment the MINOR version when we otherwise change this file or the
  security.txt in a backwards-compatible manner
- We will increment the PATCH version for minor typos or similar

### Version History

- 1.0.0 (2026-03-25) - Initial policy and procedures

## Attribution

Thanks to [@trewaters](https://github.com/trewaters) for their thoughts on
[structuring a SECURITY readme](https://github.com/Trewaters/security-README)
together with the team behind [security.txt](https://securitytxt.org/)

Licensed under [CC BY-SA 4.0 Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)

[security]: mailto:qop.maintainer@gmail.com
[disclosure]: https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#responsible-or-coordinated-disclosure
[category]: https://owasp.org/www-project-top-ten/
